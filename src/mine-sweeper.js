const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  matrix = matrix.reduce((acc, elem) => {
  let mas = [];
  for (let i = 0; i < elem.length; i += 1) {
  		if (!elem[i]) {
  			mas.push(0);
  		} else {
  			mas.push(elem[i])
  		}
  }
  return [...acc, mas];
  }, [])
  console.log(matrix)
  if (matrix[0][0] === true) {
  	matrix[0 + 1][0] += 1;
    matrix[0][0 + 1] += 1;
    matrix = matrix.reduce((acc, elem) => {
  let mas = [];
  for (let i = 0; i < elem.length; i += 1) {
  		if (elem[i] === true) {
  			mas.push(1);
  		} else {
  			mas.push(elem[i] + 1)
  		}
  }
  return [...acc, mas];
  }, [])
  }
  return matrix
}

module.exports = {
  minesweeper
};
