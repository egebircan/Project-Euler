var hrstart = process.hrtime();

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

primeArr = [];

for(var counter = 0; ; counter++) {
  if(isPrime(counter)) {
    primeArr.push(counter);

    if(primeArr.length == 10001) {
      console.log(primeArr[primeArr.length - 1]);
      break;
    }
  }

}

var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");

