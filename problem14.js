/* 

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1

It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/
var hrstart = process.hrtime();

function getCollatz(number) {
  var temp = number;
  while(number!=1) {
    if(number % 2 == 0) {
      number = number/2;
    }
    else {
      number = (3*number)+1;
    }
    chain++;
  }
  if(chain > maxChain) {
    maxChain = chain;
    maxNum = temp;
  }
}

var chain = 1;
var maxChain = 1;
var maxNum = 0;

for(var i = 999999; i>0; i--) {
  getCollatz(i);
  chain = 1;
}

console.log(maxChain);
console.log(maxNum);

var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");


