const search = (arrray, num) => {
  for (let i = 0; i < arrray.length; i++) {
    if (arrray[i] === num) {
      return i;
    }
  }
  return -1;
};
console.log(search([1, 2, 3, 4, 5], 10));
