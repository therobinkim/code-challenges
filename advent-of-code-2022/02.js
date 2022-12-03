const { parseInput } = require('./utils');
const { sum } = require('./math');

const rounds = parseInput('02.txt', '\n', (round) =>
  round.split(' ')
);

const outcomes = {
  TIE: 'TIE',
  WIN: 'WIN',
  LOSS: 'LOSS',
};

function isTie(opponent, me) {
  return opponent === 'A' && me === 'X'
    || opponent === 'B' && me === 'Y'
    || opponent === 'C' && me === 'Z';
}

function isWin(opponent, me) {
  return opponent === 'A' && me === 'Y'
    || opponent === 'B' && me === 'Z'
    || opponent === 'C' && me === 'X';
}

function getOutcome(opponent, me) {
  if (isTie(opponent === me)) return outcomes.TIE;
  else if (isWin(opponent, me)) return outcomes.WIN;
  else return outcomes.LOSS;
}

const pointsByChoice = {
  X: 1,
  Y: 2,
  Z: 3,
};

const pointsByOutcome = {
  [outcomes.LOSS]: 0,
  [outcomes.TIE]: 3,
  [outcomes.WIN]: 6,
}

function partOne() {
  return rounds.map(([opponent, me]) => {
    return pointsByChoice[me] + pointsByOutcome[getOutcome(opponent, me)]
  }).reduce(sum);
}

console.log(partOne());

function getMove(opponent, strategy) {
  if (strategy === outcomes.TIE) {
    if (opponent === 'A') return 'X';
    else if (opponent === 'B') return 'Y';
    else if (opponent === 'C') return 'Z';
  }
  else if (strategy === outcomes.WIN) {
    if (opponent === 'A') return 'Y';
    else if (opponent === 'B') return 'Z';
    else if (opponent === 'C') return 'X';
  } else if (strategy === outcomes.LOSS) {
    if (opponent === 'A') return 'Z';
    else if (opponent === 'B') return 'X';
    else if (opponent === 'C') return 'Y';
  }
}

const outcomeByInstruction = {
  X: outcomes.LOSS,
  Y: outcomes.TIE,
  Z: outcomes.WIN,
};

function partTwo() {
  return rounds.map(([opponent, strategy]) => {
    const outcome = outcomeByInstruction[strategy];
    const me = getMove(opponent, outcome);
    return pointsByChoice[me] + pointsByOutcome[outcome];
  }).reduce(sum);
}

console.log(partTwo());
