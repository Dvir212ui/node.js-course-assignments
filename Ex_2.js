/* 
 * שמות המגישים: דביר אוחנה, ליאן דיאבאת
 * תיאור הקובץ: הדפסת כל המספרים הראשוניים בין 2 ל-237.
 */
//a nested loop that prints every prime number between 2 and 237
for(let num = 2; num < 237; num++)
{   
    let isPrime = true;
    for(let div = 2; div < num && isPrime; div++)
  { //a loop that ends after a successful division of num by div
    if(num % div == 0)
        isPrime = false;
  }
    if(isPrime)
        console.log(num+" is a prime number");
}  




  