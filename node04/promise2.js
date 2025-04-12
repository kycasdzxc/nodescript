const { readFile, writeFile, chmod } = require('fs/promises');

const backupFile = `${__filename}-${Date.now()}`;

readFile(__filename)
    .then((data) => {
        return writeFile(backupFile, data)
    })
    .then(() => {
        return chmod(backupFile, 0o400);
    })
    .catch((err) => {
        console.error(err);
    })