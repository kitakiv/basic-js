const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = domains.reduce((acc, elem) => {
    elem = elem.split('.');
    elem.push('');
    elem = elem.reverse();
    for (let i = 2; i <= elem.length; i += 1) {
      let argument = elem.slice(0, i).join('.');
      if (acc[argument] === undefined) {
        acc = {...acc, [argument]: 1};
      } else {
        acc = {...acc, [argument]: acc[argument] + 1};
      }
    }
    return acc
  }, {})
  return result;
}

module.exports = {
  getDNSStats
};
