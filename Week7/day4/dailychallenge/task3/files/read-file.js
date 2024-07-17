const fs = require('fs')


function read(){fs.readFile('file-data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);

    }
    console.log(data)
});}

module.exports = {
    read
};

