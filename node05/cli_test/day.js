const dayjs = require('dayjs');

const str = dayjs('2024-03-01').format('YYYY/MM/DD');

// console.log(str);

// 오늘 날짜
console.log(dayjs().format('YYYY-MM-DD')); // 2025-04-18

// 날짜 덧셈
console.log(dayjs().add(7, 'day').format('YYYY-MM-DD')); // 7일 후

// 날짜 비교
console.log(dayjs('2025-01-01').isBefore('2025-04-01')); // true

// 불변성 확인
const a = dayjs();
const b = a.add(1, 'day');
console.log(a.format('YYYY-MM-DD')); // 변경 없음
console.log(b.format('YYYY-MM-DD')); // 하루 뒤