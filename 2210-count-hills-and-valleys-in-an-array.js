/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
  var count = 0;
  
  var uniq = [nums[0]];
  
  for(var i = 1; i < nums.length; i++) {
    if(nums[i] !== uniq[uniq.length - 1]) {
      uniq.push(nums[i])
    }
  }
  
  nums = uniq;
  
  for(var i = 1; i < nums.length - 1; i++) {
    if(nums[i - 1] < nums[i] && nums[i + 1] < nums[i]) {
      count++
    } else if(nums[i - 1] > nums[i] && nums[i + 1] > nums[i]) {
      count++
    }
  }
  
  return count;
};
