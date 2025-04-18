const path = require('path');
const fs = require('fs');
const yargs = require('yargs/yargs');
const { hidBin, hideBin } = require('yargs/helpers');

const { argv } = yargs(hideBin(process.argv))
// 인수를 표시한다.
// console.log(argv);

// 옵션 설명 추가
    .option('name', {
        describe: 'CLI 이름을 표시'
    })
    .option('file', {
        describe: '마크다운 파일 경로'
    });

// name 옵션의 동작을 이용
if (argv.name) {
    const packageStr = fs.readFileSync(path.resolve(__dirname, 'package.json'), { encoding: 'utf-8' });
    const package = JSON.parse(packageStr);

    console.log(package.name);
    // name 옵션이 들어 있는 경우 다른 옵션을 이용하지 않으므로 정상 종료시킨다.
}

// 지정된 마크다운 파일을 읽는다.
const markdownStr = fs.readFileSync(path.resolve(__dirname, argv.file), { encoding: 'utf-8' });
console.log(markdownStr);

// const packageStr = fs.readFileSync(path.resolve(__dirname, 'package.json'), { encoding: 'utf-8' });
// const package = JSON.parse(packageStr);

// name 옵션 체크
// const nameOption = process.argv.includes('--name');

// if(nameOption) {
//     console.log(package.name);
// } else {
//     console.log('옵션이 없습니다.');
// }

// if (argv.file) {
//     console.log(argv.file);
// } else if (argv.name) {
//     console.log(package.name);
// } else {
//     console.log('옵션이 없습니다.');
// }