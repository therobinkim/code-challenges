const fs = require("fs");
const path = require("path");

function parseInput(fileName, delimiter = '\n', iterator = (x) => x) {
  return fs.readFileSync(path.resolve(__dirname, fileName))
    .toString()
    .trim()
    .split(delimiter)
    .map(iterator);
}

module.exports = {
  parseInput,
};
