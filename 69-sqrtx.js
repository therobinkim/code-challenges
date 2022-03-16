/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(!x) return null;
  
  var left = 0;
  var right = x;
  var answer;
  
  while(left <= right) {
    var mid = Math.floor(left + (right - left) / 2);
    
    if(mid ** 2 == x) return mid;
    else if (mid ** 2 < x) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    };
  }
  
  return answer;
};
