const sortAlgorithm = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j + 1] < array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

console.log(sortAlgorithm([5, 6, 10, 15, 1, 15, 20, 3, 4]));
