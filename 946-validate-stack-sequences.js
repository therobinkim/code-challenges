/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  // 1839
  // 1 2 3 4 5       1 2 3 4 5
  //                 2 1 3 4 5
  //                 3 4 5 2 1
  //                 4 3 2 5 1
  //                 1 4 3 5 1
  //         i
  //.                        j           [2]
  // stack: [2]
  //   i
  //.                  j
  
  // strat:
  // push "pushed" into stack
  // i = 0
  // while
  // if popped[i] is top of stack, pop and i++
  // else push more into stack
  // return stack.length == 0
  if(!pushed || !popped) return null;

  var i = 0;
  var j = 0;
  var stack = [];
  
  while(i < pushed.length) {
    stack.push(pushed[i]);
    while(j < popped.length && stack.at(-1) === popped[j]) {
      stack.pop();
      j++;
    }
    i++;
  }
  
  return stack.length === 0;
  // end 1852 first run, double check work now
  // debugged until 1857; had 1 failed run (timeout), then success on 2nd run
};
