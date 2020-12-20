const fs = require("fs");
const path = require("path");

function parseInput(fileName, iterator = (x) => x) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(__dirname, "..", fileName), (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data.toString().split("\n").map(iterator));
      }
    });
  });
}

module.exports = {
  parseInput,
};
