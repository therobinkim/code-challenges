/**
 * @param {string} s
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
  var stack = [getNextNumber(input)];
  // console.log(stack);
  while(true) {
    var nextOperatorPosition = indexOfOperator(input);
    if(nextOperatorPosition === -1) {
      break;
    }
    var operator = input[nextOperatorPosition];
    // console.log(operator);
    // console.log(getNextNumber(input))
    input = input.slice(nextOperatorPosition + 1);
    if(operator === '+') {
      stack.push(getNextNumber(input));
    } else if(operator === '-') {
      stack.push(getNextNumber(input) * -1);
    } else if (operator === '/') {
      stack.push(divide(stack.pop(), getNextNumber(input)));
    } else if(operator === '*') {
      stack.push(stack.pop() * getNextNumber(input));
    } else {
      throw new Error('Unexpected operator: ' + operator);
    }
  }

  return stack.reduce(function sum(accumulator, number) {
    return accumulator + number;
  }, 0);
  
  
  function divide(numerator, denominator) {
    var count = 0;
    var isNegative = numerator < 0;
    if(isNegative) numerator *= -1;
    while(denominator <= numerator) {
      numerator -= denominator;
      count++;
    }
    return isNegative ? count * -1 : count;
  }
  
  function getNextNumber(string) {
    var operatorPosition = indexOfOperator(string);
    if(operatorPosition === -1) {
      return Number(string.trim());
    } else {
      return Number(string.substring(0, operatorPosition).trim());
    }
  }
  
  function indexOfOperator(string) {
    for(var i = 0; i < string.length; i++) {
      if(('-+*/').includes(string[i])) {
        return i;
      }
    }
    return -1;
  }
};
