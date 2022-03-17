/**
 * @param {number[]} nums
 * @return {number}
 */
// [1]
// LMR

// [1 3]
// LM R
var findPeakElement = function(nums) {
  // find mid; is left or right higher? go that way
  // BST 1, 2100
  var left = 0;
  var right = nums.length - 1;
  nums[-1] = -Infinity;
  nums[nums.length] = -Infinity;
  while(left <= right) {
    var mid = Math.floor(left + (right - left)/2);
    // if(mid === 0) {}
    // else if(mid === nums.length - 1) {}
    if(nums[mid] < nums[mid - 1]) right = mid - 1;
    else if(nums[mid] < nums[mid + 1]) left = mid + 1;
    else return mid;
  }
  // done 2115, small bugs i fixed after running
  
  // BST 3, 2115
  // 1
  //LMR       END
  // 1 3
  //LM R      END
  // 2 1 3
  // L M R
  //LM R      END
  // 5 3 2 4
  // L M.  R
  //LM R      END
  var left = 0;
  var right = nums.length - 1;
  nums[-1] = -Infinity;
  nums[nums.length] = -Infinity;
  while(left + 1 < right) {
    var mid = Math.floor(left + (right - left)/2);
    // go left
    if(nums[mid] < nums[mid - 1]) right = mid;
    // go right
    else if(nums[mid] < nums[mid + 1]) left = mid;
    // found it
    else return mid;
  }
  return nums[left] < nums[right] ? right : left;
  // done 2125 first try!
  
  
  // BST 2, 1015
  // 2 1
  // L M R
  //LM R
  // 1
  //LM R
  // 2 1 3
  // L M.  R
  //LM R
  // 0 1 3
  // L M.  R
  //    LM R
  // 0 1 2 3
  // L   M.  R
  //.     LM R
  var left = 0;
  var right = nums.length;
  nums[-1] = -Infinity;
  nums[nums.length] = -Infinity;
  while(left < right) {
    var mid = Math.floor(left + (right - left)/2);
    // did wordle for 5-min
    if(nums[mid] < nums[mid - 1]) right = mid;
    else if(nums[mid] < nums[mid + 1]) left = mid + 1;
    else return mid;
  }
  // end 1035
};
