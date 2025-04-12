const { readFile, writeFile, chmod } = require('fs/promises');

const main = async () => {
    const backupFile = `${__filename}-${Date.now()}`;
    const data = await readFile(__filename);
    await writeFile(backupFile, data);
    await chmod(backupFile, 0o400);
    return 'done';
}

main()
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    })