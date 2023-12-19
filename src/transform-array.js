const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const masDouble = ['--double-next',  '--double-prev', '--discard-prev', '--discard-next'];
  if (arr instanceof Array === false) throw new Error("'arr' parameter must be an instance of the Array!");
  if (!(arr.includes(masDouble[0]) || arr.includes(masDouble[1]) || arr.includes(masDouble[2]) || arr.includes(masDouble[3]))) {return arr}
  if (arr.includes(masDouble[0])) {
    let index = arr.indexOf(masDouble[0]);
    if (arr[index + 1] && arr[index + 1] !== masDouble[0] && arr[index + 1] !== masDouble[1] && arr[index + 1] !== masDouble[2] && arr[index + 1] !== masDouble[3]) {
      arr.splice(index, 0, arr[index + 1]);
    }
  }
  if (arr.includes(masDouble[3])) {
    let index = arr.indexOf(masDouble[3]);
    if (arr[index + 1] && arr[index + 1] !== masDouble[0] && arr[index + 1] !== masDouble[1] && arr[index + 1] !== masDouble[2] && arr[index + 1] !== masDouble[3]) {
      arr.splice((index + 1), 1);
    }
  }
  if (arr.includes(masDouble[1])) {
    let index = arr.indexOf(masDouble[1]);
    if (arr[index - 1] && arr[index - 1] !== masDouble[0] && arr[index - 1] !== masDouble[1] && arr[index - 1] !== masDouble[2] && arr[index - 1] !== masDouble[3]) {
      arr.splice((index - 1), 0, arr[index - 1]);
    }
  }
  if (arr.includes(masDouble[2])) {
    let index = arr.indexOf(masDouble[2]);
    if (arr[index - 1] && arr[index - 1] !== masDouble[0] && arr[index - 1] !== masDouble[1] && arr[index - 1] !== masDouble[2] && arr[index - 1] !== masDouble[3]) {
      arr.splice((index - 1), 1);
    }
  }
  return arr.reduce((acc, elem) => {
    if (elem !== masDouble[0] && elem !== masDouble[1] && elem !== masDouble[2] && elem !== masDouble[3]) {
      return [...acc, elem];
    }
    return acc;
  }, [])
}

module.exports = {
  transform
};
