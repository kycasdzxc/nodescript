const assert = require('assert');

// assert.strictEqual(1 + 2, 3, '1 + 2 = 3이다.');
// assert.strictEqual(1 + 1, 3, '1 + 2 = 3이다.');

const obj1 = {
    a: {
        b: 1
    }
};

const obj2 ={
    a: {
        c: 1
    }
};

// assert.deepStrictEqual(obj1, obj2, '객체가 같다.');

test('sample test', () => {
    expect(1 + 2).toStrictEqual(3);
})