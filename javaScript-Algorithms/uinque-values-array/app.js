const uniqueValues = (array) => {
  let first = 0;
  let second = 1;
  let count = 0;
  if (array.length === 0) {
    return console.log(0);
  }
  while (first <= array.length - 1) {
    if (array[first] === array[second]) {
      array.splice(second, 1);
    }
    if (array[first] !== array[second]) {
      count++;
      first++;
      second++;
    }
  }
  console.log(count);
  console.log(array);
};
// uniqueValues([1, 1, 1, 1, 2]);
uniqueValues([1]);
[1, 2, 3, 4, 6, 8, 8, 9, 9];
// if (second === array.length - 1) {
//   first++;
//   second = 1 + first;
// }
