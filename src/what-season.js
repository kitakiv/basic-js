const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {return "Unable to determine the time of year!"}
  if (
    date instanceof Date === false
    || Object.keys(date).length > 0
  )
    throw new Error("Invalid date!");
  const month = date.getMonth();
  const mas = ['winter', 'spring', 'summer', 'autumn'];
  if (month === 11 || (month >= 0 && month <= 1)) {return mas[0]};
  if (month >= 2 && month <= 4) {return mas[1]};
  if (month >= 5 && month <= 7) {return mas[2]};
  if (month >= 8 && month <= 10) {return mas[3]};
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
