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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  if(!root) return null;
  var currentNode = root;
  var solution = Infinity;
  while(true) {
    var currentDifference = Math.abs(currentNode.val - target);
    solution = currentDifference < Math.abs(solution - target) ? currentNode.val : solution;
    if(currentNode.val < target) {
      if(currentNode.right) {
        currentNode = currentNode.right;
      } else{
        return solution;
      }
    } else {
      if(currentNode.left) {
        currentNode = currentNode.left;
      } else {
        return solution;
      }
    }
  }
  
  // currentNode = root
  // set solution to Infinity
  // while forever
  // if currentNode.value < target
    // if right, go right
    // else DONE
  // else
    // if left, go left
    // else DONE
};
