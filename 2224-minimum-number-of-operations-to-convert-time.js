/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
  if(!current || !correct) return null;
  
  var [h, m] = current.split(':').map(Number);
  current = 60 * h + m;
  var [H, M] = correct.split(':').map(Number);
  correct = 60 * H + M;
  
  var count = 0;
  
  while(current !== correct) {
    if(current === correct) return count;

    if(correct < current) {
      current += 60;
      count++;
      current = current % 24 * 60; // if goes past midnight
    } else {
      if(correct - current >= 60) {
        current += 60;
        count++;
      } else if(correct - current >= 15) {
        current += 15;
        count++;
      } else if(correct - current >= 5) {
        current += 5;
        count++;
      } else {
        current++;
        count++;
      }
    }
  }
  return count;
};
