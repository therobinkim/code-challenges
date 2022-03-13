/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// time complexity: O(N), where N is number of nodes (btwn low and high)
// space complexity: O(1) for `sum`, O(N) for recursive frames
var rangeSumBST = function(root, low, high) {
  if(!root) return 0;
  var sum = 0;
  if(low <= root.val && root.val <= high) {
    sum += root.val;
  }
  if(low <= root.val) {
    sum += rangeSumBST(root.left, low, high);
  }
  if(root.val <= high) {
    sum += rangeSumBST(root.right, low, high);
  }
  return sum;
};
