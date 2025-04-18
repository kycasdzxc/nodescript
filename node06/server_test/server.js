const express = require('express');
const app = express();

// // GET '/'(톱) 접근 시 동작
// app.get('/', (req, res) => {
//     res.status(200).send('hello world\n');
// });

// // GET '/user/:id'와 일치하는 GET의 동작
// app.get('/user/:id', (req, res) => {
//     res.status(200).send(req.params.id);
// });

// // 포트: 3000번에서 서버를 기동
// app.listen(3000, () => {
//     // 서버 기동 후에 호출되는 콜백
//     console.log('start listening');
// });

const logMiddleware = (req, res, next) => {
    console.log(req.method, req.url);
    next();
}

// 라우팅과 미들웨어
app.get('/',
    // 추가한 미들웨어
    logMiddleware,
    // 원래의 미들웨어
    (req, res) => {
    res.status(200).send('hello world\n');
});

// 포괄적 에러 핸들링
app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error');
});

///////////////////////////////////////////////////

app.listen(3000, () => {
    console.log('start listening');
});

const errorMiddleware = (req, res, next) => {
    next(new Error('미들웨어에서 에러'));
}
app.get('/err', errorMiddleware, (req, res) => {
    console.log('err 라우트');
    res.status(200).send('err 라우트');
});

// 인수 4개의 에러 핸들링
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('Internal Serer Error');
});