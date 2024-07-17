import fs from 'fs';

export function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);

        }
        console.log(data)
    });
}

export function writeFile(filePath, data) {
    fs.writeFile(filePath, data, 'utf8', (err) => {
        if (err) {
            console.error(err);
        }
        console.log(data)
    });
}

writeFile('HelloWorld.txt', 'Hello World !!')
writeFile('ByeWorld.txt', 'Bye World !!')



