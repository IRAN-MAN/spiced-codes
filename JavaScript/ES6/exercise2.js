/*
Write a function that takes two arrays as arguments and returns a new array containing all of 
the items in the two arrays passed to it. This function should

leave the original arrays unchanged

contain no loops of any kind. That includes for, for...in, for...of, while, or do...while

not call slice or any other method on the two arrays passed to it

not call push or concat on any array in any way
*/

const myArray1 = [10, 20, 30];
const myArray2 = [40, 50, 60];

const makeJoinedArray = (array1, array2) => [...array1, ...array2];

console.log(makeJoinedArray(myArray1, myArray2));
