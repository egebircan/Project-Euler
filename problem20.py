def getFactorial(num):
  factorial = 1

  while num>0 : 
    factorial *= num
    num = num - 1 
  
  return factorial



stringFac = str(getFactorial(100))
sum = 0

for x in range (0, len(stringFac)):
  sum += int(stringFac[x])

print(sum)
