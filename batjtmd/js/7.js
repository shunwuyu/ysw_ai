function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log(i, nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum([2,7,11,15], 9))