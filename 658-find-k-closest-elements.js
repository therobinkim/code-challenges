/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
/*
1 3 4 5 6     3
L.  M.  R
L M R

0 10     2
L R
  LMR
R. L

1 2 3 4.   -1
L M.  R
LR

1 3             2
L R
 LMR
R L

*/
// time complexity O(log (N) + k)
// space complexity O(k)
// > Space used for the output is not counted towards the space complexity.
// nvm, space complexity O(1)
var findClosestElements = function(arr, k, x) {
  // find where x's position would be
  // then go left and right and add to solutions until we have k solutions
  // solution CONFIRMED!
  if(!arr || !arr.length || arr.length < k || (!x && x !== 0)) return [];
  
  var left = 0;
  var right = arr.length - 1;
  var solutionLeft;
  var solutionRight;
  while(left <= right) {
    var mid = Math.floor(left + (right - left)/2);
    
    if(arr[mid] === x) {
      solutionLeft = mid;
      solutionRight = mid;
      break;
    } else if(arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // what if we don't find?
  if(left > right) {
    // they're actually switched
    [left, right] = [right, left];
    if(left === -1) {
      solutionLeft = 0;
      solutionRight = 0;
    } else if(right === arr.length) {
      solutionLeft = arr.length - 1;
      solutionRight = arr.length - 1;
    } else {
      var closer = Math.abs(arr[left] - x) <= Math.abs(arr[right] - x) ? left : right;
      solutionLeft = closer;
      solutionRight = closer;
    }
  }
  
  while(solutionRight - solutionLeft + 1 < k) {
    if(solutionLeft === 0) solutionRight++;
    else if(solutionRight === arr.length - 1) solutionLeft--;
    else {
      var solutionLeftLeftDelta = Math.abs(arr[solutionLeft - 1] - x);
      var solutionRightRightDelta = Math.abs(arr[solutionRight + 1] - x);

      if(solutionLeftLeftDelta <= solutionRightRightDelta) {
        solutionLeft--;
      } else {
        solutionRight++;
      }
    }
  }
  
  return arr.slice(solutionLeft, solutionRight + 1);
};
