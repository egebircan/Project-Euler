var hrstart = process.hrtime();

const sieve = max => {
  // Make array of length max and fill with true
  const sieve = new Array(max).fill(true)

  // Iterate from 2 until square root of max
  for (let i = 2; i < Math.sqrt(max); i++) {
    // If the number is labelled a prime then we can start at i^2 and mark every multiple of i
    // from there as NOT a prime
    if (sieve[i]) {
      for (let j = Math.pow(i, 2); j < max; j += i) {
        sieve[j] = false
      }
    }
  }

  // Now we can reduce our sieve to only the Prime indexes that are true
  return sieve.reduce((primes, isPrime, i) => {
    if (isPrime && i > 1) {
      primes.push(i)
    }

    return primes
  }, [])
}

function primeSum(num) {
  var primeArr = sieve(num);
  var sum = 0;

  for(var i = 0; i < primeArr.length; i++) {
    sum += primeArr[i];
  }

  return sum;
};

console.log(primeSum(2000000));

var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");