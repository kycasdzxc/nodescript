const http = require('http');

const req = http.request('http://localhost:3000', (res) => {
    // 흘러오는 데이터를 utf8로 해석한다.
    res.setEncoding('utf8');

    // data 이벤트를 받는다.
    res.on('data', (chunk) => {
        console.log(`body: ${chunk}`);
    })

    // end 이벤트를 받는다.
    res.on('end', () => {
        console.log('end');
    })
})

// 여기에서 처음으로 요청이 송신된다.
req.end();