const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((acc, elem) => {
    for (let i = 0; i < elem.length; i += 1) {
      if (elem[i] === '^^') {
        acc += 1;
      }
    }
    return acc;
  }, 0)
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
