var hrstart = process.hrtime();

function ifDivisibleBy3or5(number) {

    if (number % 3 == 0) {
      toBeSummedArr.push(number);
    }  

    else if (number % 5 == 0) {
      toBeSummedArr.push(number);
    }

    else {return false;}

}


function getSum() {

  for(var i = 0; i<toBeSummedArr.length; i++) {
    sum += toBeSummedArr[i];
  }
}

var sum = 0;
var toBeSummedArr = [];

for(var i = 0; i<1000; i++) {

  ifDivisibleBy3or5(i);
 
}

getSum();

console.log(sum);

var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");