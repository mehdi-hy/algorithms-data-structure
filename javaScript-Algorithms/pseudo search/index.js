const search = (array, num) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2) + 1;
    if (array[middle] > num) {
      right = middle;
    } else if (array[middle] < num) {
      left = middle;
    } else if (array[middle] === num) {
      return true;
    }
  }
  return false;
};
console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
