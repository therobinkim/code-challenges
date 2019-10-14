// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n, wip = '', countOfOpenParentheses = 0, countOfClosedParentheses = 0) {
  if(countOfClosedParentheses === n) {
    return [wip];
  }
  
  var results = [];
  
  // ( if I can
  if(countOfOpenParentheses < n) {
    results = results.concat(generateParenthesis(n, wip + '(', countOfOpenParentheses + 1, countOfClosedParentheses));
  }
  
  // ) if I can
  if(countOfClosedParentheses < countOfOpenParentheses) {
    results = results.concat(generateParenthesis(n, wip + ')', countOfOpenParentheses, countOfClosedParentheses + 1));
  }
  
  return results;
};
