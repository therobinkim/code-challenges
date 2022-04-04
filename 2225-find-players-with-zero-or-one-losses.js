/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  var players = {};
  
  matches.forEach(([winner, loser]) => {
    players[winner] = players[winner] || 0;
    players[loser] = (players[loser] || 0) + 1;
  });
  
  var sort = (a, b)=> a < b ? -1 : 1;
    
  var winners = Object.entries(players).filter(([player, count]) =>{
    return count === 0;
  }).map(([player]) => player)
  .map(Number)
  .sort(sort)
  
  var runnerUps = Object.entries(players).filter(([player, count]) =>{
    return count === 1;
  }).map(([player]) => player)
  .map(Number)
  .sort(sort)
  
  return [winners, runnerUps];
};
