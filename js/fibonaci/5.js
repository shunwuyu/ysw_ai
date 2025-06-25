// 递归 自顶向下 计算方程  退出条件
// 自底向上思考 f(1) = 1 f(2) = 2 f(3) = f(1) + f(2)
  // 迭代的方式 （入栈不需要 ）
  // 也不需要额外的空间
  // dp 动态规划
  // 最值问题用递归
  
const climbStairs = function(n) {
  // dp 数组
  const dp = [];
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    // 重叠子问题 
    // 每一步都拿到结果，最优子结构
    dp[i] = dp[i-1] + dp[i-2] // 状态转移方程
  }
  return dp[n];
}