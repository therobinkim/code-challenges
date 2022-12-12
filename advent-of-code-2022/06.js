const { parseInput } = require("./utils");

const input = parseInput('06.txt')[0];

function partOne(input) {
  for (var i = 0; i < input.length - 4; i++) {
    if (new Set([...input.substr(i, 4)]).size === 4) return i + 4;
  }
}

console.log(partOne('mjqjpqmgbljsphdztnvjfqwrcgsmlb') + ' should be 7');
console.log(partOne('bvwbjplbgvbhsrlpgdmjqwftvncz') + ' should be 5');
console.log(partOne('nppdvjthqldpwncqszvftbrmjlhg') + ' should be 6');
console.log(partOne('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg') + ' should be 10');
console.log(partOne('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw') + ' should be 11');
console.log(partOne(input));

function partTwo(input) {
  const LENGTH = 14;
  for (var i = 0; i < input.length - LENGTH; i++) {
    if (new Set([...input.substr(i, LENGTH)]).size === LENGTH) return i + LENGTH;
  }
}

console.log(partTwo('mjqjpqmgbljsphdztnvjfqwrcgsmlb') + ' should be 19');
console.log(partTwo('bvwbjplbgvbhsrlpgdmjqwftvncz') + ' should be 23');
console.log(partTwo('nppdvjthqldpwncqszvftbrmjlhg') + ' should be 23');
console.log(partTwo('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg') + ' should be 29');
console.log(partTwo('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw') + ' should be 26');
console.log(partTwo(input));
