var hrstart = process.hrtime();  //NEDEN findDivisor içine IF YAZINCA ÇALIŞMIYOR?

function tri(num) {
  var nu = (num * (num + 1)) / 2;
  return nu;
}

function findDivisors(num) {
  var divisorArr = [];
  var max = num;
  for(var i = 1; i < max; i++) {
    if(num % i == 0) {
      divisorArr.push(i);
      var secondFactor = num / i;

      if(secondFactor != i) {divisorArr.push(secondFactor);}
      max = secondFactor;
    }
  }
  return divisorArr.length;
}

var triNum = 1;
var adder = 2;

while(findDivisors(triNum) <= 500) {
  triNum += adder;
  adder++;
} 

console.log(triNum);


var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");