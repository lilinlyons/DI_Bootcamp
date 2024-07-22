const { db } = require("../config/db.js");
const bcrypt = require('bcrypt');


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

const _registerUser = async (username, password) => {
    try {
        const hashedPassword = await cryptPwd(password);
        return db('users').insert({ username, password: hashedPassword }, ["id", "username", "password"]);
    } catch (err) {
        console.error('Error registering user:', err);
    }
};


const _login = async (username, password) => {
    try {
        const user = await db('users').where({ username }).first();
        if (!user) {
            console.log('User not found');
            return false;
        }
        const match = await bcrypt.compare(await cryptPwd(password), user.password);
        if (match) {
            console.log('Login successful');
            return true;
        } else {
            console.log('Password does not match');
            return false;
        }
    } catch (err) {
        console.error('Error logging in:', err);
        throw err;
    }
};

const _getAllUsers = () => {
    return db("users").select("id", "username", "password").orderBy("id");
};

const _getOneUser = (user_id) =>{
    return db("users")
        .select("id", "username", "password")
        .where({ id: user_id });
}

const _updateUser = async (user_id, username, password) => {
    const hashedPassword = await cryptPwd(password);
    return db("users")
        .where({id: user_id})
        .update({username, password: hashedPassword}, ["id", "username", "password"])

};
module.exports = {
    _registerUser,
    _login,
    _getAllUsers,
    _getOneUser,
    _updateUser
};
