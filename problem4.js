var hrstart = process.hrtime();

function isPalindrome(number) {

  var n = number.toString();

  if(n.substring(0,1) == n.substring(5,6) &&
     n.substring(1,2) == n.substring(4,5) &&
     n.substring(2,3) == n.substring(3,4))
  {
    return number;
    
  }
  
  else {return false;}

}

var num1 = 999;
var palindromeArr = [];

while(num1 >= 100) {

  var num2 = 999;

  while(num2 >= 100) {
    if(isPalindrome(num1 * num2) != false) {
      palindromeArr.push(isPalindrome(num1 * num2));
    } 
    num2--;
  }
  num1--;
}

palindromeArr.sort(function(a, b){return a - b});

console.log(palindromeArr[palindromeArr.length - 1]);

var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): " + hrend[0] + " s " + Math.floor(hrend[1]/1000000) + " ms");