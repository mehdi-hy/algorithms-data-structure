const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter your number ? ', function (number) {
  const items = [...number];
  let value = 0;
  let count = '1';
  let newArray = [];
  for (item of items) {
    if (item === value) {
      count += '1';
      newArray = [...count, ...item];
    } else {
      value = item;
      newArray = [...newArray, ...count, ...item];
    }
  }
  console.log(newArray);
  rl.close();
});
