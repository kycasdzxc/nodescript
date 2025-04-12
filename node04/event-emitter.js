const EventEmitter = require('events');

// EventEmitter의 베이스 클래스를 상속해 사용자 이벤트를 다루는 EventEmitter를 정의
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// myevent라는 이름의 event를 받는 리스너를 설정
myEmitter.on('myevent', (data) => {
    console.log('on myevent: ', data);
})

// myevent 발행
myEmitter.emit('myevent', 'one');

setTimeout(() => {
    // myevent 발행
    myEmitter.emit('myevent', 'two');
}, 1000)