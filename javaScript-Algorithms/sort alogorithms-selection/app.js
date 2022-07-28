const selection = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minNumber = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minNumber]) {
        minNumber = j;
      }
    }
    [array[i], array[minNumber]] = [array[minNumber], array[i]];
  }
  return array;
};
console.log(selection([1, 5, 3, 10, 7, 12, 11]));
