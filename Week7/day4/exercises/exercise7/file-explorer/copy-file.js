import fs from 'fs';

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);

    }

    fs.writeFile('destination.txt', data, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return; // Exit early if there's an error
        }
        console.log('Data has been written to destination.txt');
    });
});


