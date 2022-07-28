const validAnagram = (text1, text2) => {
  let freqCounter1 = {};
  let freqCounter2 = {};
  let order1 = [...text1];
  let order2 = [...text2];
  for (let val of text1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of text2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }
  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key] !== freqCounter1[key]) {
      return false;
    }
    if (order1 === order2.reverse()) {
      return false;
    }
    return true;
  }
};
console.log(validAnagram('anagram', 'nagaram'));
