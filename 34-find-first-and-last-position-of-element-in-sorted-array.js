/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// i had to run this multiple times to get the conditions JUST right :/; 20-min

// 0123456
// 1222223
// L  M. R
//    LM R
//.    LMR
//      LR
// look for lowest 2
// look for highest 2

// 57788X
// L M. R
//    LMR
//.   LR
//.   
var searchRange = function(nums, target) {
  if(!nums || !nums.length) return [-1, -1];
  
  var left = 0;
  var right = nums.length - 1;
  
  while(left < right) {
    var mid = Math.floor(left + (right - left)/2);
    if(nums[mid] === target) {
      right = mid;
    } else if(nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if(nums[left] !== target) return [-1, -1];
  
  const solution = [left];
  
  var left = 0;
  var right = nums.length - 1;
  
  while(left + 1 < right) {
    var mid = Math.floor(left + (right - left)/2);
    if(nums[mid] === target) {
      left = mid;
    } else if(nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if(nums[right] === target) solution.push(right)
  else if(nums[left] === target) solution.push(left);
  
  return solution;
  
};
