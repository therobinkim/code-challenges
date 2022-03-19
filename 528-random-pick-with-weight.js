// https://leetcode.com/problems/random-pick-with-weight/
// create cumulative sum lookup
// then binary search the cumulative sums?

// weights   [1 3 2]
// cumulative[1 4 6]
// target of "3" means "find the smallest cumulative weight that is bigger than target

/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.cumulativeWeights = [w[0]];
  for(var i = 1; i < w.length; i++) {
    this.cumulativeWeights[i] = this.cumulativeWeights[i - 1] + w[i];
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  if(this.cumulativeWeights.length === 1) return 0;
  
  var target = this.cumulativeWeights.at(-1) * Math.random();
  var left = 0;
  var right = this.cumulativeWeights.length - 1;
  while(left + 1 < right) {
    var mid = Math.floor(left + (right - left)/2);
    if(target < this.cumulativeWeights[mid]) {
      right = mid;
    } else {
      left = mid;
    }
  }
  // 1 or 2 elements
  if(target < this.cumulativeWeights[left]) return left
  return right;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
