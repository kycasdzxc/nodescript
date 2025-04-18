const path = require('path');
const fs = require('fs');

// package.json이 1단계 위가 됐으므로 상대 경로를 1단계 위로 올린다.
const packageStr = fs.readFileSync(path.resolve(__dirname, '../package.json'), { encoding: 'utf-8' });
const package = JSON.parse(packageStr);

exports.getPackageName = () => {
    return package.name;
};