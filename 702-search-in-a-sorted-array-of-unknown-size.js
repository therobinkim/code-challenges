/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
// 1350
var search = function (reader, target) {
  var left = 0;
  var right = 10000; // specified by "constraints" section
  while(left + 1 < right) {
    var mid = Math.floor(left + (right - left)/2);
    if(reader.get(mid) < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if(reader.get(left) === target) return left;
  if(reader.get(right) === target) return right;
  return -1;
};
