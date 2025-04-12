import { request } from "undici";

console.time('req');

const reqs = [];

for (let i = 0; i < 10; i++) {
    // 요청하는 객체를 reqs에 넣는다.
    const req = request('http://localhost:8000').then(res => res.body.text());
    reqs.push(req);
}

// 모든 요청의 완료를 기다려서 받는다.
await Promise.all(reqs);

console.timeEnd('req');