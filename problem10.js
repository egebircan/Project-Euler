var hrstart = process.hrtime();

function isPrime(num) {
  for(var i = 3; i < num; i += 2)
    if(num % i === 0) return false;
  return num > 1;
}

var sum = 2; //only even prime number

for(var i = 1; i <= 2000000; i += 2) {
  if(isPrime(i)) {
    sum += i;
  }
}

console.log(sum);


var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");