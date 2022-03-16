/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// strat 1: sort it
  // INVALID, NLOGN, requires LOGN
// strat 2: linear scan and find out where pivot is
  // INVALID, N, requires LOGN
// strat 3: 
/*
1 2 3 4 5 6 7 8 9     left good, right good
2 3 4 5 6 7 8 9 1     left good, right pivot
3 4 5 6 7 8 9 1 2     left good, right pivot
4 5 6 7 8 9 1 2 3
9 1 2 3 4 5 6 7 8     left pivot, right good
L
                R
        M

if nums[R] < nums[L], then pivoted
if nums[M] < nums[L], then pivoted on left half
if nums[R] < nums[M], then pivoted on right half

is target mid? return mid
is left good?
  is target < mid? right = mid - 1
  else left = mid + 1
else
  is target > mid? left = mid + 1
  else right = mid - 1
*/


var search = function(nums, target) {
  var left = 0;
  var right = nums.length - 1;
  while(left <= right) {
    var mid = Math.floor(left + (right - left)/2);
    if(nums[mid] === target) return mid;
    if(nums[left] < nums[right]) { // no pivot
      if(target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      // I LEFT OUT THIS vvv EQUAL SIGN AND MY SOLUTION DIDNT WORK FOR A LONG TIME
    } else if(nums[left] <= nums[mid]) { // left is ascending; right has pivot
      if(nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else { // left has pivot; right is ascending
      if(nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
