const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'} = options;
  if (addition !== undefined) {
  	str = `${str}${repeatstr(addition, additionRepeatTimes, additionSeparator)}`;
  }
  return repeatstr(str, repeatTimes, separator);
  function repeatstr(abc, times, space) {
    let mas = [];
    for (let i = 0; i < times; i += 1) {
    		mas.push(`${abc}`);
    	}
  return mas.join(`${space}`)
  }
}

module.exports = {
  repeater
};
