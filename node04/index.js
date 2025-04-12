// A C B 순서
// const { readFile } = require('fs');

// console.log('A');

// readFile(__filename, (err, data) => {
//     console.log('B', data);
// })

// console.log('C');

const { readFile, writeFile, chmod } = require('fs');

const backupFile = `${__filename}-${Date.now()}`;

readFile(__filename, (err, data) => {
    if (err) {
        return console.log(err);
    }
    writeFile(backupFile, data, (err) => {
        if (err) {
            return console.log(err);
        }
        chmod(backupFile, 0o400, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log('done');
        })
    })
})

const fs = require('fs');

for (let i = 0; i < 100; i++) {
    const text = `write: ${i}`;

    fs.writeFile('./data.txt', text, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(text);
    })
}

const writeFile2 = (i) => {
    if (i >= 100) {
        return;
    }

    const text = `write: ${i}`;
    fs.writeFile('./data2.txt', text, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(text);
        writeFile2(i+1);
    })
}

writeFile2(0);