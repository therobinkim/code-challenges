const { parseInput } = require('./utils');
const { sum } = require('./math');

const assignments = parseInput('04.txt', '\n', (pairs) => {
  return pairs.split(',')
    .map(pair => pair.split('-').map(Number));
});

const example = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`.split('\n')
  .map((pairs => {
    return pairs.split(',')
      .map(pair => pair.split('-').map(Number));
  }));

function partOne(assignments) {
  return assignments.filter(function (pairs) {
    const first = pairs[0]
    const second = pairs[1];

    function doesFullyContain(a, b) {
      return a[0] <= b[0] && b[1] <= a[1];
    }

    return doesFullyContain(first, second) || doesFullyContain(second, first);
  }).length;
}

console.log(partOne(example) + ' should be 2');
console.log(partOne(assignments));


function partTwo(assignments) {
  return assignments.filter(function (pairs) {
    const first = pairs[0]
    const second = pairs[1];

    function doesPartiallyContain(a, b) {
      return a[0] <= b[0] && b[0] <= a[1]
    }

    return doesPartiallyContain(first, second) || doesPartiallyContain(second, first);
  }).length;
}

console.log(partTwo(example) + ' should be 4');
console.log(partTwo(assignments));
