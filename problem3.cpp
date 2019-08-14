public class Nums 
{
   public static void main(String[] args)
   {
      double num = 3.17584931803E11;
      double i = 0; //counter
      
      for(; i < num; i++)
      {
         if(i % 10000000 == 0) //status updates
            System.out.println("\t\t\t\t" + i);
         
         if(num % i == 0) //is factor
         {
            if(isPrime(i)) //is prime #
            {
               System.out.println(i);
            }
         }
      }
   }
   
   public static boolean isPrime(double num)
   {
      //check for the most common things first to speed things up a bit
      //if num is divisable by 2, 3, 5, or 7 it's not prime
      //because this checks 2, also checks for 4, 6, 8, and all other evns b/c, they are all divisable by 2
      //because this checks 3, it also checks for 6, 9, and all other nums divisable by 3
      //same for everything divisable by 5 & 7
      if(num % 2 == 0)
         return false;
      if(num % 3 == 0)
         return false;
      if(num % 5 == 0)
         return false;
      if(num % 7 == 0)
         return false;
      
      //not common num so, use brute-force
      for(double x = 2; x < num; x++)
      {
         if(num % x == 0)  //if sone num divides in evenly
         {
            return false;
         }
      }
      //checked all nums so must be prime
      return true;
   }
}