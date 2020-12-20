const { parseInput } = require("./utils/parseInput.js");

partOne([3, 1]).then(console.log, console.error);
partTwo([
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
]).then(console.log, console.error);

async function partOne([right, down]) {
  const data = await parseInput("03.txt");
  return data.filter((line, index) => {
    if (index % down !== 0) {
      return false;
    }
    const position = ((index * right) / down) % line.length;
    const isTree = line[position] === "#";
    // if (down === 2) console.log(index, position, line, isTree);
    return isTree;
  }).length;
}

async function partTwo(slopes) {
  const data = await parseInput("03.txt");
  const trees = await Promise.all(slopes.map(partOne));
  // console.log(trees);
  return trees.reduce(function multiply(accumulator, number) {
    return accumulator * number;
  }, 1);
}
