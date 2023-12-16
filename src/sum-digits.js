const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function sum(num) {
    if (num.toString().length === 1) {
      return parseInt(num)
    } else {
      let result = num.toString().split('').reduce((acc, elem) => acc + parseInt(elem), 0);
      return sum(result);
    }
  }
  return sum(n)
}

module.exports = {
  getSumOfDigits
};
