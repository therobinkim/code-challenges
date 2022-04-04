/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, kids) {
  if(!candies || !candies.length || !kids) return 0;
  
  // if kids is bigger than candies.length, then there is a risk of no answer
  // if enough candies.length, then it's NOT just "find the kth largest pile" bc maybe one number is 1,000,000 and the kids can divide that equally
  /*
    [1, 1, 1_000_000], 3 => 333_333


    ok, what if the numbers are sorted from LARGEST to SMALLEST?
    i think there's a way to iterate, and for each new pile we see, recalculate the largest number of possible candies the kids can get
    if we can claculate, then solution = Math.max(solution, candiesPerChild)
    
    
    [5, x, x], 1 => 5
    [5, 5, x], 2 => 5
     ^
     5/2 = 2, solution = Math.max(solution, 2)
        ^ sum / 2 = 5, which is <= min; solution = Math.max(solution 5)
    [5, 5, 4], 3 => 4
     ^
     5/3 = 1, solution = Math.max(solution, 1)
        ^ sum / 3 = 3, which is <= min; solution = Math.max(solution 3)
    [5, 5, 4], 4 => 1
    [5, 5, 4], 5 => 1
    [5, x, x], 6 => 0
    
    
    [12, 5, 4], 2 => 6
     ^
     12/2 = 6, solution = Math.max(solution, 6)
         ^ sum / 2 = 8, which is NOT <= min... sooo go with min           solution = Math.max(solution, 5)
    [12, 5, 4], 3 => 5 // 2x5 from 12, 1x5 from 5
     ^
     12/3 = 4, solution = Math.max(solution, 4)
         ^ sum / 3 = 5, which is <= min...                                solution = Math.max(solution, 5)
            ^ sum / 3 = 7, which is MORE than min... UH OH....
    [12, 5, 4], 4 => 4 // 3x4 from 12, 1x4 from 5
    [12, 5, 4], 5 => 2
    [12, 5, 4], 6 => 2
    [12, 5, 4], 7 => 1
    ...             ...
    ...              1
    
    [3, 3, 3, 3, 3], 7 => 1
     ^ sum/7 = 0
        ^ sum/7 = 0
           ^ sum / 7 = 1
              ^ sum / 7 = 1
                 ^ sum / 7 = 2
  */
  
//   candies = candies.sort((a, b) => a > b ? -1 : 1);

//   var sum = 0;
//   var cumulativeSum = [];
//   for(var i = 0; i < candies.length; i++) {
//     sum += candies[i];
//     cumulativeSum[i] = sum;
//   }
  
//   var solution = Math.trunc(candies[0] / kids);
//   for(var i = 0; i < cumulativeSum.length; i++) {
//     var sum = cumulativeSum[i];
//     var poorAttempt = goesInto(kids, sum);
//     poorAttempt = Math.min(candies[i], poorAttempt)
//     if(poorAttempt <= candies[i]) {
//       var doubleCheckCount = 0;
//       for(var j = 0; j <= i; j++) {
//         doubleCheckCount += goesInto(poorAttempt, candies[i]);
//       }
//       if(doubleCheckCount >= kids) {
//         solution = Math.max(solution, poorAttempt);
//       }
//     } else {
//       // if kids is 3, need to consider scenario where we take 2 piles from A, 1 pile from B...?
//     }
//   }
  
  // binary search
  var left = 1;
  var right = Math.max(...candies);
  
  while(left < right) {
    var mid = Math.floor(left + (right - left) / 2);
    
    var count = 0;
    for(var i = 0; i < candies.length; i++) {
      count += goesInto(mid, candies[i]);
    }
    if(count >= kids) {
      // mid should become bigger
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  
  var count = 0;
  for(var i = 0; i < candies.length; i++) {
    count += goesInto(right, candies[i]);
  }
  console.log(left, right)
  if(count >= kids) {
    return right;
  } else {
    return right - 1;
  }
};

function goesInto(small, big) {
  return Math.trunc(big/small);
}
