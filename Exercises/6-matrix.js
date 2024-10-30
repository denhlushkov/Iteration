'use strict';
// Use nested for loop to find max value in 2d matrix
  // For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  // should return 9
const max = (matrix) => {
  let value = matrix[0][0];
  for (let i = 0; i < matrix.length; i++){
    const wid = matrix[i];
        for (let j = 0; j < wid.length; j++){
          const fin = wid[j];
          if (fin > value){
            value = fin;
          }
    }
  }
  return value;
};

module.exports = { max };
