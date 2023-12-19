const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    if (this.chain.length === 0) {
      return 0;
    } else {
      return this.chain.length;
    }
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
      if (!(typeof position === 'number' && position <= this.getLength() && position > 0))  {
        this.chain = [];
        throw new Error("You can't remove incorrect link!");
      }
      this.chain.splice(position - 1, 1);
      return this;
    },

  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chain1  = this.chain;
    this.chain = [];
    return chain1.join("~~");
  }
};

module.exports = {
  chainMaker
};
