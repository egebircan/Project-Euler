var hrstart = process.hrtime();

for(var a = 1; a<999; a++) {
  for(var b = 1; b < 999; b++) {
    var c = (a**2 + b**2) ** 0.5;
    if(Math.floor(c) == c && a + b + c == 1000) {
      console.log(a * b * c);
    }
    /*for(var c = 1; c < 999; c++) {
      if(a + b + c == 1000 && a**2 + b**2 == c**2) {
        console.log(a*b*c);
      }
    } */ //Execution times improves dramatically when the third loop is deleted.
  }
}

var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");