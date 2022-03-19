/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
//   // BST 2 practice
//   // 2500 start
  
//   // EITHER left OR right half is pivoted; never both
//   // pivoted half has smallest number
//   // if no pivots, it's the 0th element
//   // time complexity: O(N) binary search
  
//   /*
//     1
//    LM R
   
//     1 2
//     L M R
    
//     2 1
//     L M R
    
//     1 2 3 4 5 L < <
//     2 3 4 5 1 R < <
//     3 4 5 1 2 R < >
//     4 5 1 2 3 M > <
//     5 1 2 3 4 L < <
//   */
//   if(nums.length === 1) return nums[0];
//   if(nums[0] < nums[nums.length - 1]) return nums[0];
  
//   var left = 0;
//   var right = nums.length;
//   while(left < right) {
//     var mid = Math.floor(left + (right - left)/2);
//     // left is sorted; pivot on right
//     if(nums[left]) {}
//     // left is pivot; right is sorted
//   }
//   // left is equal to right
  
  // BST 3
  if(nums.length <= 3) return Math.min(...nums);
  var left = 0;
  var right = nums.length - 1;
  
  while(left + 1 < right) {
    // sorted
    if(nums[left] < nums[right]) return nums[left];
    var mid = Math.floor(left + (right - left)/2);
    if(nums[left] < nums[mid]) {
      // left is asc; right has pivot
      left = mid + 1;
    } else {
      // left has pivot
      right = mid;
    }
  }
  // left, mid, right
  return Math.min(nums[left], nums[mid], nums[right]); // LOL??
};
