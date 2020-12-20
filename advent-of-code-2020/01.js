const { parseInput } = require("./utils/parseInput.js");

// partOne(2020).then(console.log, console.error);
// partTwo(2020).then(console.log, console.error);

async function partOne(targetSum) {
  const data = await parseInput("01.txt", Number);
  for (var i = 0; i < data.length; i++) {
    const first = data[i];
    for (var j = i + 1; j < data.length; j++) {
      const second = data[j];
      if (first + second === targetSum) {
        return first * second;
      }
    }
  }
}

async function partTwo(targetSum) {
  const data = await parseInput("01.txt", Number);
  for (var i = 0; i < data.length; i++) {
    const first = data[i];
    for (var j = i + 1; j < data.length; j++) {
      const second = data[j];
      for (var k = j + 1; k < data.length; k++) {
        const third = data[k];
        if (first + second + third === targetSum) {
          return first * second * third;
        }
      }
    }
  }
}
