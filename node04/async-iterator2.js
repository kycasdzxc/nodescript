const fs = require('fs');
const { writeFile } = require('fs/promises');

// 잠시 기다리는 비동기 함수
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const writeFileName = `${__filename}-${Date.now()}`;

const write = async (chunk) => {
    // (Math.random() * 1000)ms 동안 기다린다.
    await sleep(Math.random() * 1000);
    // 파일에 추가 모드로 쓴다.
    await writeFile(writeFileName, chunk, { flag: 'a' });
}

const main = async () => {
    const stream = fs.createReadStream(__filename, { encoding: 'utf8', highWaterMark: 64 });
    let counter = 0;
    for await (const chunk of stream) {
        console.log(counter);
        counter++;

        await write(chunk);
    }
}

main()
    .catch((e) => console.error(e));