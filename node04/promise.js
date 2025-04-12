const { readFile, writeFile, chmod } = require('fs');

const readFileAsync = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        })
    })
}

const writeFileAsync = (path, data) => {
    return new Promise((resolve, reject) => {
        writeFile(path, data, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        })
    })
}

const chmodAsync = (backupFile, mode) => {
    return new Promise((resolve, reject) => {
        chmod(backupFile, mode, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        })
    })
}

const backupFile = `${__filename}-${Date.now()}`;

readFileAsync(__filename)
    .then((data) => {
        return writeFileAsync(backupFile, data)
    })
    .then(() => {
        return chmodAsync(backupFile, 0o400);
    })
    .catch((err) => {
        console.error(err);
    })

const { promisify } = require('util');
const readFileAsync2 = promisify(readFile);
const writeFileAsync2 = promisify(writeFile);
const chmodAsync2 = promisify(chmod);