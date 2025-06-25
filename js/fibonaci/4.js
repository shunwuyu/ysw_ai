const f = [];
const climbStairs = function(n) {
  if (n == 1) return 1
  if (n == 2) return 2

  if (f[n] === undefined)  f[n] = climbStairs(n-1) + climbStairs(n-2);
  return f[n]
}

console.log(climbStairs(100))