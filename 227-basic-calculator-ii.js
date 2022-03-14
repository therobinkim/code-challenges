/**
 * @param {string} input
 * @return {number}
 */

/*
  3 + 2 * 2 + 3 / 2 - 1

  start stack with first element
  if +, put next thing in stack
  if -, put next thing * -1 in stack
  if *, grab top of stack, *, and put in stack
  if /, grab top of stack, /, and put in stack
  at end, sum array
*/
var calculate = function(input) {
  if(!input.length) return 0;
  
  var stack = [];
  var rest = '+' + input.trim(); // sets first operator to '+'
  
  do {
    var [operator, number, rest] = next(rest);
    if(operator === '+') {
      stack.push(number);
    } else if(operator === '-') {
      stack.push(number * -1);
    } else if (operator === '/') {
      stack.push(Math.trunc(stack.pop() / number));
    } else if(operator === '*') {
      stack.push(stack.pop() * number);
    } else {
      throw new Error('Unexpected operator: ' + operator);
    }
  } while(rest.length);

  return stack.reduce(function sum(accumulator, number) {
    return accumulator + number;
  }, 0);

  function next(input) {
    if(!input.length) return [null, 0, ''];
    var operator = input[0];
    var nextOperatorPosition = indexOfNextOperator(input, 1);
    var number = Number(input.slice(1, nextOperatorPosition).trim());
    return [operator, number, input.slice(nextOperatorPosition)]
  }

  function indexOfNextOperator(input, start = 0) {
    for(var i = start; i < input.length; i++) {
      if(('-+*/').includes(input[i])) {
        return i;
      }
    }
    return Infinity;
  }
};
