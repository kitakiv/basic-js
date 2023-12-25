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
// function transform(arr) {
//   const masDouble = ['--double-next',  '--double-prev', '--discard-prev', '--discard-next'];
//   if (arr instanceof Array === false) throw new Error("'arr' parameter must be an instance of the Array!");
//   if (!(arr.includes(masDouble[0]) || arr.includes(masDouble[1]) || arr.includes(masDouble[2]) || arr.includes(masDouble[3]))) {return arr}
//   if (arr.includes(masDouble[0])) {
//     let index = arr.indexOf(masDouble[0]);
//     if (arr[index + 1] && arr[index + 1] !== masDouble[0] && arr[index + 1] !== masDouble[1] && arr[index + 1] !== masDouble[2] && arr[index + 1] !== masDouble[3]) {
//       arr.splice(index, 0, arr[index + 1]);
//     }
//   }
//   if (arr.includes(masDouble[3])) {
//     let index = arr.indexOf(masDouble[3]);
//     if (arr[index + 1] && arr[index + 1] !== masDouble[0] && arr[index + 1] !== masDouble[1] && arr[index + 1] !== masDouble[2] && arr[index + 1] !== masDouble[3]) {
//       arr.splice((index + 1), 1);
//     }
//   }
//   if (arr.includes(masDouble[1])) {
//     let index = arr.indexOf(masDouble[1]);
//     if (arr[index - 1] && arr[index - 1] !== masDouble[0] && arr[index - 1] !== masDouble[1] && arr[index - 1] !== masDouble[2] && arr[index - 1] !== masDouble[3]) {
//       arr.splice((index - 1), 0, arr[index - 1]);
//     }
//   }
//   if (arr.includes(masDouble[2])) {
//     let index = arr.indexOf(masDouble[2]);
//     if (arr[index - 1] && arr[index - 1] !== masDouble[0] && arr[index - 1] !== masDouble[1] && arr[index - 1] !== masDouble[2] && arr[index - 1] !== masDouble[3]) {
//       arr.splice((index - 1), 1);
//     }
//   }
//   return arr.reduce((acc, elem) => {
//     if (elem !== masDouble[0] && elem !== masDouble[1] && elem !== masDouble[2] && elem !== masDouble[3]) {
//       return [...acc, elem];
//     }
//     return acc;
//   }, [])
// }
function transform(arr) {
  let result = [];
  const masDouble = ['--double-next',  '--double-prev', '--discard-prev', '--discard-next'];
  if (arr instanceof Array === false) throw new Error("'arr' parameter must be an instance of the Array!");
  if (!(arr.includes(masDouble[0]) || arr.includes(masDouble[1]) || arr.includes(masDouble[2]) || arr.includes(masDouble[3]))) {return arr}
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--double-next' && arr[i + 1] && !masDouble.includes(arr[i + 1])){
      result.push(arr[i + 1])
    }
    if (arr[i] === '--double-prev'  && arr[i - 1] && !masDouble.includes(arr[i - 1])) {
      if (result.at(-1) === arr[i - 1]) {
        result.push(arr[i - 1]);
      }
    }
    if (arr[i] === '--discard-prev'  && arr[i - 1] && !masDouble.includes(arr[i - 1])) {
      if (result.at(-1) === arr[i - 1]) {
        result.pop();
      }
    }
    if (!masDouble.includes(arr[i])) {
      result.push(arr[i]);
    }
    if (arr[i] === '--discard-next' && arr[i + 1] && !masDouble.includes(arr[i + 1])) {
        i += 1;
    }
    }
  return result;
}
module.exports = {
  transform
};
