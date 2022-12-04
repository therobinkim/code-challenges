const { parseInput } = require('./utils');
const { sum } = require('./math');

const rucksacks = parseInput('03.txt');

const example = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`.split('\n');

const PRIORITY = '#abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function partOne(rucksacks) {
  return rucksacks.map(function getCommonLetterPriority(rucksack) {
    const compartmentSize = rucksack.length / 2;
    const first = rucksack.slice(0, compartmentSize);
    const second = rucksack.slice(-compartmentSize);

    let common;
    first.split('').forEach((item) => {
      if (second.includes(item)) {
        common = item;
      }
    });

    return PRIORITY.indexOf(common);
  }).reduce(sum);
}

console.log(partOne(example) + ' should be 157');
console.log(partOne(rucksacks));

function partTwo(rucksacks) {
  const groups = (function groupByThree(rucksacks) {
    const groups = [];
    for (var i = 0; i < rucksacks.length; i += 3) {
      const first = rucksacks[i];
      const second = rucksacks[i + 1];
      const third = rucksacks[i + 2];
      groups.push([first, second, third]);
    }
    return groups;
  })(rucksacks);

  return groups.map(([first, second, third]) => {
    let common;
    first.split('').forEach((item) => {
      if (second.includes(item) && third.includes(item)) {
        common = item;
      }
    });

    return PRIORITY.indexOf(common);
  }).reduce(sum);
}

console.log(partTwo(example) + ' should be 70');
console.log(partTwo(rucksacks));
