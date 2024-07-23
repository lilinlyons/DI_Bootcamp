const { usersPath } = require("../config/db.js");
const bcrypt = require('bcrypt');
const {promises: fs} = require("fs");


async function cryptPwd(userPassword) {
    const saltRounds = 10; // You can adjust the salt rounds as needed
    try {
        const hash = await bcrypt.hash(userPassword, saltRounds);
        return hash;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const _getAllUsers = async () => {
    try {
        const data = await fs.readFile(usersPath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('File not found:', err);
        } else if (err.name === 'SyntaxError') {
            console.error('Error parsing JSON:', err);
        } else {
            console.error('Error reading file:', err);
        }
        throw err;
    }
};




const _registerUser = async (name, lastname, email, username, password) => {
    try {
        const users = await _getAllUsers();

        const userExists = users.some(user => user.username === username || user.email === email);

        if (userExists) {
            throw new Error('Username or email already exists');
        }

        const newUser = { id: users.length + 1, name, lastname, email, username, password: await cryptPwd(password) };
        users.push(newUser);
        console.log('New user:', newUser);

        const updatedData = JSON.stringify(users, null, 2);
        await fs.writeFile(usersPath, updatedData, 'utf8');

        console.log('User added successfully!');
        return newUser;
    } catch (err) {
        console.error('Error registering user:', err);
        throw err;
    }
};

const _login = async (username, password) => {
    try {
        const users = await _getAllUsers();
        const user = users.find(u => u.username === username);

        if (!user) {
            console.log('User not found');
            throw new Error('User not found');
        }

        const match = await bcrypt.compare(password, user.password);
        if (match) {
            console.log('Login successful');
            return true;
        } else {
            console.log('Password does not match');
            throw new Error('Password does not match');
        }
    } catch (err) {
        console.error('Username or Password not found:', err);
        throw err;
    }
};

const _getOneUser = async (user_id) => {
    try {
        const users = await _getAllUsers();
        const user = users.find(t => t.id == user_id);
        return user;
    } catch (err) {
        console.error('Error finding user:', err);
        throw err;
    }
}


const _updateUser = async (user_id, name, lastname, email, username, password) => {
    try {
        const users = await _getAllUsers();
        const userIndex = users.findIndex(t => t.id == user_id);

        if (userIndex === -1) {
            console.error('User not found');
            return;
        }
        users[userIndex].name = name
        users[userIndex].lastname = lastname
        users[userIndex].email = email
        users[userIndex].username = username
        users[userIndex].password = await cryptPwd(password)

        const updatedData = JSON.stringify(users, null, 2);

        await fs.writeFile(usersPath, updatedData, 'utf8');

        console.log('User Password and Name updated successfully!')
        return users[userIndex]
    } catch (err) {
        console.error('Error updating task:', err);
        throw err;
    }

};
module.exports = {
    _registerUser,
    _login,
    _getAllUsers,
    _getOneUser,
    _updateUser
};
