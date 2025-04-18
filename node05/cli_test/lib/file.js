const fs = require('fs');

// 인수로 파일의 절대 경로를 받는다.
exports.readMarkdownFileSync = (path) => {
    // 지정된 마크다운 파일을 읽는다.
    const markdownStr = fs.readFileSync(path, { encoding: 'utf-8' });

    return markdownStr;
};

exports.writeHtmlFileSync = (path, html) => {
    fs.writeFileSync(path, html, { encoding: 'utf-8' });
};