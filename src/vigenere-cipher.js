const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
class VigenereCipheringMachine {

  constructor(flag = true) {
    this.flag = flag;
  }

  encrypt(str, key) {
    let space = 0;
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    if (str.length > key.length) {
      key = key.repeat(Math.ceil(str.length / key.length));
    }
    const result = str.split('').reduce((acc, elem) => {
        if (alphabet.includes(elem.toUpperCase())) {
          space += 1
        	return acc + this.toRot13(elem.toUpperCase(), alphabet.indexOf(key[space - 1].toUpperCase()))
        }
 		    return acc + elem;
    }, '');
    if (this.flag) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
  decrypt(str, key) {
    let space = 0;
    if (!str || !key) {
      throw new Error("Incorrect arguments!");
    }
    if (str.length > key.length) {
      key = key.repeat(Math.ceil(str.length / key.length));
    }
    const result = str.split('').reduce((acc, elem) => {
        if (alphabet.includes(elem.toUpperCase())) {
          space += 1
        	return acc + this.fromRot13(elem.toUpperCase(), alphabet.indexOf(key[space - 1].toUpperCase()))
        }
 		    return acc + elem;
    }, '')
    if (this.flag) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }

  toRot13(str, key) {
    return str.split('').reduce((acc, elem) => {
      if (alphabet.includes(elem)) {
        let k = alphabet.indexOf(elem) + key;
        if (k > alphabet.length - 1) {
          k = k - (alphabet.length - 1) - 1;
        }
        return acc + `${alphabet[k]}`;
      }
      return acc + elem;
    }, '')
  }

  fromRot13(str, key) {
    return str.split('').reduce((acc, elem) => {
      if (alphabet.includes(elem)) {
        let k = alphabet.indexOf(elem) - key;
        if (k < 0) {
          console.log(k)
          k = alphabet.length + k;
          console.log(k)
        }
        return acc + `${alphabet[k]}`;
      }
      return acc + elem;
    }, '')
  }
}

module.exports = {
  VigenereCipheringMachine
};
