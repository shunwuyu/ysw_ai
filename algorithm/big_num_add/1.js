/**
 * 
 * @param {string} num1 
 * @param {string} num2 
 * @return {string} 
 */
function addLargeNumbers(num1, num2) {
  let result = '';// 存储结果
  let carry = 0; // 存储进位 
  let i = num1.length -1 ;
  let j = num2.length - 1;
  while( i >= 0 || j >=0 || carry > 0) {
    // 边界
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[i]) : 0;
    const sum = digit1 + digit2 + carry;
    result = sum % 10 + result;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return result;
}