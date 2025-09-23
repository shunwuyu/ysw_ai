function validPalindrom(s) {
  let left = 0,
    right = s.length -1;
  
  const isPal = (str, i, j) => {
    while(i < j) {
      if (str[i] !== str[j]) return false;
      i++;
      j--;
    }
    return true;
  }
  while(left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return isPal(s, left + 1, right) || isPal(s, left, right - 1);
    }
  }

  return true;
}

console.log(validPalindrom('abca'));