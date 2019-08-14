var hrstart = process.hrtime();

function findDivisors(num) {
  var divisorArr = [];
  var max = num;
  var sum = 0;
  for(var i = 1; i < max; i++) {
    if(num % i == 0) {
      divisorArr.push(i);
      var secondFactor = num / i;

      if(secondFactor != i) {divisorArr.push(secondFactor);}
      max = secondFactor;
    }
  }
  
  for(var i = 0; i < divisorArr.length; i++) {
    sum += divisorArr[i];
  }

  sum -= num;
  return sum;
  
  
}


var amicArr = [];





 for(var i = 2; i < 10000; i++) {
  var temp = findDivisors(i);

  if(i === findDivisors(temp) && i !== temp) {
    if(!amicArr.includes(i)) {
      amicArr.push(i);
    }
  }
} 

var amicSum = 0;

for(var i = 0; i < amicArr.length; i++) {
  amicSum += amicArr[i];
}

console.log(amicSum);

var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");