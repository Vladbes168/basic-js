const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [], // Массив для хранения элементов цепочки

  getLength() {
    return this.chain.length; // Возвращаем длину цепочки
  },

  addLink(value) {
    if (value === undefined) {
      this.chain.push("( )");
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this; // Возвращаем сам объект для цепочного вызова
  },

  removeLink(position) {
    if (
      typeof position !== "number" ||
      position < 1 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
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
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
