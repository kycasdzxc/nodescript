const { request } = require('undici');

const main = async () => {
    const resArray = await Promise.all([
        request('https://www.google.com/'),
        request('https://www.naver.com/'),
        request('https://www.hanbit.co.kr/')
    ])

    for (const res of resArray) {
        const body = await res.body.text();
        const title = body.match(/<title>(.*)<\/title>/g);
        console.log(title);
    }

    return 'done';
}

main()
    .then((data) => console.log(data))
    .catch((err) => console.error(err))