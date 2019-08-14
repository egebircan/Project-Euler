var hrstart = process.hrtime();

function sqOfSum() {
  
  var sum = 0;

  for(var i = 1; i <= 100; i++) {
    sum += i
  }

  return sum * sum;
}

function sumOfSq() {

  var sum = 0;

  for(var i = 1; i <= 100; i++) {
    var sq = i * i;
    sum += sq;
    
  }

  return sum;
}

console.log(sqOfSum() - sumOfSq()); 


var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");