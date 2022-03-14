/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */


// if i can pick whatever pile i want,
// ~~i can just sum and average~~ <-- wrong
// if i have to eat in order... 2 pointers?


// 10 0 1 2, 6 => 3
// 4    1 1

// 2 1 0 10, 6

// time complexity: 
  // binary search?? takes O(LOG N) to pick...
  // O(N) to calculate..
  // O(N*LOGN) for whole solution
// space complexity:
// my soln is O(N*LOGN) but could be optimized to O(1)

// # piles < h

//      1 2 3 4 5 6
// min: x
// mid:     *
// max:           x

var minEatingSpeed = function(piles, h) {
  if(!piles || !piles.length || !h) return null;
  
  // get biggest pile value by sorting (nvm, don't need to sort)
  // binary search, and see if valid hours
  // continue binary search
  let minRate = 1;
  let maxRate = Math.max(...piles);
  let solution;
  while(minRate <= maxRate) {
    const midRate = Math.floor((minRate + maxRate) / 2);
    const hoursToEat = piles.map(pile => Math.ceil(pile/midRate))
      .reduce(function sum(accumulator, number) {
        return accumulator + number;
      }, 0);
    const canEatFastEnough = hoursToEat <= h;
    if(canEatFastEnough) {
      solution = midRate;
      maxRate = midRate - 1;
    } else {
      minRate = midRate + 1;
    }
  }
  return solution;
};
