/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (num) {
  //Your code here
  if (num == 1) {
    return num;
  } else {
    return num * findFactorial(num - 1);
  }
};

//Exercise 2
const reverseString = function (str) {
  //Your code here
  let size = str.length;
  if (str === "") {
    return str;
  }
  let reverse = str.charAt(size - 1);
  return reverse + reverseString(str.slice(0, -1));
};

// const reverseString = function (str, left = 0, right = str.length - 1) {
//   if (left >= right) {
//     return left === right ? str.charAt(left) : "";
//   }

//   let firstChar = str.charAt(left);
//   let lastChar = str.charAt(right);

//   return lastChar + reverseString(str, left + 1, right - 1) + firstChar;
// };

//Exercise 3
const arr1 = [1, 2, 3];
const arr2 = [];

const swap = function () {
  //Your code here
};

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap };
