/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  if(!n) return null;
  var left = 1;
  var right = n;
  var answer;
  
  while(left <= right) {
    var mid = Math.floor(left + (right - left) / 2);
    var hint = guess(mid);
    switch(hint) {
      case 1:
        left = mid + 1;
        break;
      case 0:
        return mid;
      case -1:
        right = mid - 1;
        break;
    }
  }
  
  return answer;
};
