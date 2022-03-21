/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function(numArrows, aliceArrows) {
  var memo = {
    // index-points: arrows
  };
  
  return helper(numArrows, new Array(12).fill(0), 11, 0)[1];
  
  function helper(arrowsRemaining, bobArrows, index, points){
    if(arrowsRemaining === 0) return [points, bobArrows];
    if(arrowsRemaining < 0) return [-Infinity];
    if(index < 0) return [points, bobArrows];
    if(index === 0) {
      bobArrows = bobArrows.slice();
      bobArrows[0] = arrowsRemaining;
      return [points, bobArrows]
    }
    
    
    var skip = bobArrows.slice()
    var go = bobArrows.slice();
    go[index] = aliceArrows[index] + 1;
    
    var [skipPoints, skipArray] = helper(arrowsRemaining, skip, index - 1, points);

    var [goPoints, goArray] = helper(arrowsRemaining - aliceArrows[index] - 1, go, index - 1, points + index);
    
    return skipPoints < goPoints ? [goPoints, goArray] : [skipPoints, skipArray];
  }
};
