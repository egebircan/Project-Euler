var hrstart = process.hrtime();

function primeArr(n) {
 
  while (n % 2 == 0)  
  {  
      console.log("2 ");
      n = n/2;  
  }  

  // n must be odd at this point. So we can skip  
  // one element (Note i = i +2)  
  for (var i = 3; i <= Math.sqrt(n); i = i + 2)  
  {  
      // While i divides n, print i and divide n  
      while (n % i == 0)  
      {  
          console.log(i + " ");  
          n = n/i;  
      }  
        
    }  



  // This condition is to handle the case when n  
  // is a prime number greater than 2  
  if (n > 2)  
  console.log(n + " ");

}

primeArr( 600851475143 );

var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");