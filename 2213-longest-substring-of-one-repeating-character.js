// DNF; time exceeded


/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */

/*
  bbbacc
  012345
     LR
     
  "abyzz"
  "aa"
  [2,1]
  
  01234
  abyzz
  
  
  still timing out w/ simple loops and sliding windows
  maybe i need to use the fact that we have previous results to help here..?
*/
var longestRepeating = function(s, queryCharacters, queryIndices) {
  if(s.length == 1) return new Array(queryCharacters.length).fill(1);
  
  var solution = [];
  s = s.split('');
  queryIndices.forEach((index, i) => {
    s[index] = queryCharacters[i];
    var left = 0;
    var right = 1;
    var longest = 1;
    while(left < s.length && right < s.length + 1) {
      if(s[left] == s[right]) {
        right++
      } else {
        longest = Math.max(longest, right - left);
        left = right;
        right = left + 1;
      }
    }
    solution.push(longest);
  })
  return solution;
};
