import { createServer } from 'http'
import { on } from 'events';
import { setTimeout } from 'timers/promises';

// request 이벤트를 for ... await로 받을 수 있게 한다.
const req = on(createServer().listen(8000), 'request');

for await (const [, res] of req) {
    await setTimeout(100);
    res.end('hello');
}