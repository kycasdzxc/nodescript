const path = require('path');
const { marked } = require('marked'); // marked 추가
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { getPackageName } = require('./lib/name');
const { readMarkdownFileSync, writeHtmlFileSync } = require('./lib/file');

const { argv } = yargs(hideBin(process.argv))
    .option('name', {
        describe: 'CLI 이름을 표시'
    })
    .option('file', {
        describe: '마크다운 파일 경로'
    })
    .option('out', {
        describe: 'html file',
        default: 'article.html'
    });

if (argv.name) {
    const name = getPackageName();
    console.log(name);
    process.exit(0);
}

// 절대 경로를 지정해 파일을 읽는다.
const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
// console.log(markdownStr);
const html = marked(markdownStr);

// HTML 파일에 쓰기
writeHtmlFileSync(path.resolve(__dirname, argv.out), html);