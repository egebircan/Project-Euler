var hrstart = process.hrtime();

function check() {
  
  for(var i = 20; i>0; i--) {
    if(num % i == 0) {
      if(i == 1) {return true;}
    }
    else{return false;}
  }
}


var num = 20;

while(check(num) == false) {
  num++
}

console.log(num);

var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");