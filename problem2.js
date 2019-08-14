var hrstart = process.hrtime();

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

var result = 0;

var i = 0;

while(true) {
  
  var currentNum = fibonacci(i)

  if(currentNum > 4000000) {
    break;
  }

  else if(currentNum % 2 == 0) {
    result += currentNum;
    }
  
  i++;
  
  console.log(result);
}

var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");


