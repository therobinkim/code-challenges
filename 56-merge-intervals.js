// https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  
  var results = [];
  
  let currInterval = intervals[0].slice();
  let nextInterval = intervals[1].slice();
  for(var i = 1; i <= intervals.length; i++) {
    if(nextInterval[0] <= currInterval[1]) {
      currInterval[1] = Math.max(currInterval[1], nextInterval[1]);
    }
    if(currInterval[1] < nextInterval[0]) {
      results.push(currInterval);
      currInterval = nextInterval;
    }
    nextInterval = intervals[i+1];
    if(nextInterval) {
      nextInterval = nextInterval.slice();
    } else {
      nextInterval = [Infinity, Infinity];
    }
  }
  
  return results;
};
