const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = str.split('').reduce((acc, elem, index) => {
    if (index === 0) {
      return [...acc, [1, elem]]
    }
    if (acc[acc.length - 1][1] === elem) {
      acc[acc.length - 1][0] += 1
    } else {
      return [...acc, [1, elem]]
    }
    return acc
  }, [])
  return result.reduce((acc, elem) => {
    if (elem[0] === 1) {
      return `${acc}${elem[1]}`
    }
    return `${acc}${elem[0]}${elem[1]}`
  }, '')
}

module.exports = {
  encodeLine
};
