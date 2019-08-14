def sumDigits(num) :
  sum = 0;
  
  while num:
    sum += num % 10;
    num //= 10;
  
  print(sum);

sumDigits(2**1000);