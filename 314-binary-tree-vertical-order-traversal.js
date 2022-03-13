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
 * @return {number[][]}
 */
var verticalOrder = function (root) {
// DFS, +/- 1 for "index" based on left/right
  var solution = {};
  // {-2: [4], -1: [9, 5], 0: [3, 0, 1]}

  traverse(root, 0, 0);

  function traverse(node, index, depth) {
    if (!node) return;
    solution[index] = solution[index] || [];
    solution[index].push({ depth, val: node.val });
    traverse(node.left, index - 1, depth + 1);
    traverse(node.right, index + 1, depth + 1);
  }

  // console.log(solution)



  return Object.entries(solution) // [['0', [...]], ['-1', [...]], ['-2', [...]], ...]
    .sort(([key1], [key2]) => Number(key1) < Number(key2) ? -1 : 1)
    .map(([key, values]) => values)
    .map(values => values.sort((a, b) => a.depth < b.depth ? -1 : 1))
    .map(values => values.map(a => a.val));

// BFS
//   if (!root) return [];
//   var solution = {};
//   var queue = [[{ node: root, col: 0 }]];
//   var depth = 0;
//   while (depth < queue.length) {
//     var row = queue[depth];
//     for (var i = 0; i < row.length; i++) {
//       var { node, col } = row[i];
//       solution[col] = solution[col] || [];
//       solution[col].push(node.val)

//       if (node.left) {
//         queue[depth + 1] = queue[depth + 1] || [];
//         queue[depth + 1].push({ node: node.left, col: col - 1 });
//       }
//       if (node.right) {
//         queue[depth + 1] = queue[depth + 1] || [];
//         queue[depth + 1].push({ node: node.right, col: col + 1 });
//       }
//     }
//     depth++;
//   }
//   var keys = Object.keys(solution).sort((a, b) => Number(a) < Number(b) ? -1 : 1);
//   return keys.map(key => solution[key]);
};
