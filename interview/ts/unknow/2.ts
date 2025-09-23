let u:unknown;

u = 123;
// u = 'world';
if (typeof u === 'number') {
  u.toFixed(); // 安全
}