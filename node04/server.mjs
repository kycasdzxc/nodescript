import { createServer } from 'http';

const server = createServer();

server.on('request', (req, res) => {
    // 무언가의 비동기 처리
    setTimeout(() => {
        res.end('hello');
    }, 100);
});

server.listen(8000);