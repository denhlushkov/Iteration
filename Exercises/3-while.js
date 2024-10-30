'use strict';
// Use while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  let val = 0;
  while (args.length > 0){
    val += args.pop();
  }
  return val;
};

module.exports = { sum };
