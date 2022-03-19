// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
/**
 * @param {string} s
 * @return {string}
 */

// two pointers
// left and right

// one pointer
// iterate and keep all valid () pairs
// then iterate and remove excess ( at the end w/o matching closes

// a(b()
// L   R
//  L  R
// )(()() => ()()
// )(()(  => ()
// ((()())=> (()())
// L.    R
// ())((

// time complexity: O(N)
// space complexity: O(N)
var minRemoveToMakeValid = function(s) {
  if(!s) return null;
  var firstPass = '';
  var count = 0;
  for(var i = 0; i < s.length; i++) {
    var character = s[i];
    if(character === '(') {
      firstPass += character;
      count++;
    } else if(character === ')') {
      if(count > 0) {
        firstPass += character;
        count--;
      }
    } else {
      firstPass += character;
    }
  }
  var secondPass = '';
  var count = 0;
  for(var j = firstPass.length - 1; j >= 0; j--) {
    var character = firstPass[j];
    if(character === ')') {
      secondPass = character + secondPass;
      count++;
    } else if(character === '(') {
      if(count > 0) {
        secondPass = character + secondPass;
        count--;
      }
    } else {
      secondPass = character + secondPass;
    }
  }
  return secondPass;
};
