const fs = require('fs');
const { writeFile } = require('fs/promises');

// 잠시 기다리는 비동기 함수
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const readStream = fs.createReadStream(__filename, { encoding: 'utf8', highWaterMark: 64 });
const writeFileName = `${__filename}-${Date.now()}`;

const write = async (chunk) => {
    // (Math.random() * 1000)ms 동안 기다린다.
    await sleep(Math.random() * 1000);
    // 파일에 추가 모드로 쓴다.
    await writeFile(writeFileName, chunk, { flag: 'a' });
}

let counter = 0;
readStream.on('data', async (chunk) => {
    console.log(counter);
    counter++;

    await write(chunk);
})

readStream.on('close', () => {
    console.log('close');
})

readStream.on('error', (e) => {
    console.log('error: ', e);
})