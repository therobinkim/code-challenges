/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
  var count = 0;
  directions = directions.split('');
  
  for(var i = 0; i < directions.length; i++) {
    var direction = directions[i];
    if(direction === 'R') {
      if(i < directions.length - 1) {
        if(directions[i + 1] === 'S') {
          directions[i] = 'S'
          count++
          if(directions[i - 1] === 'R') {
            i-=2;
          }
        } else if(directions[i + 1] === 'L') {
          directions[i] = 'S';
          directions[i + 1] = 'S';
          count++;
          count++;
          if(directions[i - 1] === 'R') {
            i-=2;
          }
        }
      }
    } else if(direction === 'L') {
      if(0 < i) {
        if(directions[i - 1] === 'S') {
          directions[i] = 'S'
          count++
        }
      }
    }
  }
  return count;
};
