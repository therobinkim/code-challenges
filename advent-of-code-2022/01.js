const { parseInput } = require('./utils');
const { sum } = require('./math');
const { byAscending } = require('./sort');

const caloriesByElf = parseInput('01.txt', '\n\n', (elf) => {
  return elf.split('\n')
    .map(Number)
    .reduce(sum);
});

function mostCalories() {
  return Math.max(...caloriesByElf);
}

console.log(mostCalories());

function topThreeMostCalories() {
  return caloriesByElf
    .sort(byAscending)
    .slice(-3)
    .reduce(sum);
}

console.log(topThreeMostCalories());
