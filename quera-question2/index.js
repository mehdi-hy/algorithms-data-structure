var readlineSync = require('readline-sync');
readline = readlineSync.question;

var n = parseInt(readline());
let matches = [];
let draw = 0;
let pers1 = 0;
let pers2 = 0;

let est1 = 0;
let est2 = 0;
for (let i = 1; i <= n; i++) {
  let a = {};
  let income = readline().split(' ');

  pers1 = parseInt(income[0]);
  est1 = parseInt(income[1]);
  pers2 = parseInt(income[2]);
  est2 = parseInt(income[3]);
  let sumpers = pers1 + pers2;
  let sumest = est1 + est2;

  let match = { pers: sumpers, est: sumest };
  matches = [...matches, match];
}

for (num of matches) {
  if (num['pers'] > num['est']) {
    console.log('perspolis');
  }
  if (num['pers'] < num['est']) {
    console.log('esteghlal');
  }
  if (num['pers'] === num['est']) {
    console.log('penalty');
  }
}
