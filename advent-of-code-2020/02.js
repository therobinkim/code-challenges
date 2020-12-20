const { parseInput } = require("./utils/parseInput.js");

// partOne().then(console.log, console.error);
// partTwo().then(console.log, console.error);

async function partOne() {
  const data = await parseInput("02.txt", (line) => {
    const [restriction, password] = line.split(": ");
    const [range, letter] = restriction.split(" ");
    const [low, high] = range.split("-").map(Number);
    return {
      low,
      high,
      letter,
      password,
    };
  });
  return data.filter(({ low, high, letter, password }) => {
    const frequency = password
      .split("")
      .filter((character) => character === letter).length;
    return low <= frequency && frequency <= high;
  }).length;
}

async function partTwo() {
  const data = await parseInput("02.txt", (line) => {
    const [restriction, password] = line.split(": ");
    const [range, letter] = restriction.split(" ");
    const [low, high] = range.split("-").map(Number);
    return {
      low,
      high,
      letter,
      password,
    };
  });
  return data.filter(({ low, high, letter, password }) => {
    const isFirst = password[low - 1] === letter;
    const isSecond = password[high - 1] === letter;
    return isFirst ^ isSecond;
  }).length;
}
