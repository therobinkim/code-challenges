/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    // 1040 start
    // BST 2 practice
    // left = 1
    // right = n
    // if !isbad, go right
    
    // account for mid is 1
    // if isbad && isBad(mid - 1) go left
    // else return mid
    
    var left = 1;
    var right = n;
    while(left < right) {
      var mid = Math.floor(left + (right - left)/2);
      var isBad = isBadVersion(mid);
      if(!isBad) left = mid + 1;
      else {
        if(mid == 1) {
          return mid;
        } else if (isBadVersion(mid - 1)) { // go left more
          right = mid;
        } else { // first bad one!
          return mid;
        }
      }
    }
    // post processing, esp if only started w/ 1 element
    return left;
    // 1048 end
  };
};
