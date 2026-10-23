/* 
 * שמות המגישים: דביר אוחנה, ליאן דיאבאת
 * תיאור הקובץ: הדפסת מספר הפעמים שבהם המספר חולק באחד מהמספרים: 5, 3, 2.
 */
const num = 123;
//adding +1 to result for every successful division of num by: (2, 3 or 5)
const result = Number(num%2 == 0) +Number(num%3 == 0) +Number(num%5 == 0);
console.log(result);