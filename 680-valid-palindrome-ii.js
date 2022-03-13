/**
 * @param {string} s
 * @return {boolean}
 */
// "ebcbbececabbacecbbcbe"
//       L
//                 R
var validPalindrome = function(s) {
    if(!s) return false;
    for(var left = 0, right = s.length-1; left < right; left++, right--) {
        if(s[left] !== s[right]) {
            return isPalindrome(left, right - 1) || isPalindrome(left + 1, right);
        }
    }
    return true;
    
    function isPalindrome(left, right) {
        for(; left < right; left++, right--) {
            if(s[left] !== s[right]) {
                return false;
            }
        }
        return true;
    }
};
