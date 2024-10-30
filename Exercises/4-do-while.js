'use strict';
// Use do..while loop and accumulator variable
  // to calculate sum of all given arguments
  // For example sum(1, 2, 3) should return 6
const sum = (...args) => {
  
  let val = 0;
  if (args.length == 0){return val}

  do {
    val += args.pop();
  } while (0 < args.length);
  return val;
};

module.exports = { sum };
