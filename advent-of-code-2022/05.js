
/*
[N]     [C]                 [Q]
[W]     [J] [L]             [J] [V]
[F]     [N] [D]     [L]     [S] [W]
[R] [S] [F] [G]     [R]     [V] [Z]
[Z] [G] [Q] [C]     [W] [C] [F] [G]
[S] [Q] [V] [P] [S] [F] [D] [R] [S]
[M] [P] [R] [Z] [P] [D] [N] [N] [M]
[D] [W] [W] [F] [T] [H] [Z] [W] [R]
 1   2   3   4   5   6   7   8   9
*/

const { parseInput } = require("./utils");

const stacks = [
  'DMSZRFWN',
  'WPQGS',
  'WRVQFNJC',
  'FZPCGDL',
  'TPS',
  'HDFWRL',
  'ZNDC',
  'WNRFVSJQ',
  'RMSGZWV'
].map(stack => stack.split(''));
const steps = parseInput('05.txt').slice(10)
  .map(processSteps);

const example = ['ZN', 'MCD', 'P']
  .map(stack => stack.split(''));
const exampleSteps = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`.split('\n')
  .map(processSteps);

function processSteps(line) {
  const regex = /move (\d+) from (\d+) to (\d+)/;
  const [, howMany, from, to] = line.match(regex);
  return [howMany, from, to];
}

function partOne(stacks, steps) {
  stacks = JSON.parse(JSON.stringify(stacks));
  steps.forEach(step => {
    const [howMany, from, to] = step;
    for (var i = 1; i <= howMany; i++) {
      stacks[to - 1].push(stacks[from - 1].pop());
    }
  });

  return stacks.map(stack => stack.pop()).join('');
}

console.log(partOne(example, exampleSteps) + ' should be CMZ');
console.log(partOne(stacks, steps));

function partTwo(stacks, steps) {
  stacks = JSON.parse(JSON.stringify(stacks));
  steps.forEach(step => {
    const [howMany, from, to] = step;
    stacks[to - 1] = stacks[to - 1].concat(stacks[from - 1].splice(-howMany, howMany));
  });


  return stacks.map(stack => stack.pop()).join('');
}

console.log(partTwo(example, exampleSteps) + ' should be MCD');
console.log(partTwo(stacks, steps));
