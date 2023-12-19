const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members instanceof Array === false) {return false};
  let result = members.reduce((acc, elem) => {
    if (typeof elem === 'string') {
      elem = elem.toUpperCase().replaceAll(' ', '');
      return [...acc, elem[0]];
    }
    return acc;
  }, [])
  return result.sort( (a, b) => a > b ? 1 : -1).join('')
}

module.exports = {
  createDreamTeam
};
