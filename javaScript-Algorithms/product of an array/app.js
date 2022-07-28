const productOfAnArray = (array) => {
  if (array.length === 0) {
    return 0;
  }
  return array[0] + productOfAnArray(array.slice(1));
};
console.log(productOfAnArray([1, 2, 5, 10, 20]));
