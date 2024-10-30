'use strict';
// Use for loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6\

const sum = (...args) => {
  let ss = 0;
  for (let i = 0; i < args.length; i++){
    ss += args[i];
  }
  return ss;
};

module.exports = { sum };
