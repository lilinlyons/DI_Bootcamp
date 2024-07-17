import fs from 'fs';


fs.readdir('./', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    console.log('Files:');
    files.forEach(file => {
        console.log(file);
    });
});