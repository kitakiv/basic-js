const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num = n.toString();
  const result = num.split('').reduce((acc, elem, index) => {
    elem = num.split('');
    elem.splice(index, 1);
    elem = parseInt(elem.join(''));
    return [...acc, elem];
  }, [])
  console.log(result)
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
