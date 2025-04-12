const http = require('http');

// http 서버 생성
http
    .createServer((req, res) => {
        // 클라이언트에 반환할 내용을 쓴다.
        res.write('hello world\n');
        // 클라이언트에 내용을 송신
        res.end();
    })
    .listen(3000)