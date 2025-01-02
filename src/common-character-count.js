const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount([...s1], [...s2]) {
  const elementCount = {};
  let commonCount = 0;

  s1.forEach((el) => {
    elementCount[el] = (elementCount[el] || 0) + 1;
  });
  s2.forEach((el) => {
    if (elementCount[el]) {
      commonCount++;
      elementCount[el]--;
    }
  });
  return commonCount;
}

module.exports = {
  getCommonCharacterCount,
};
