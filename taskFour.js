//4. Checking if it's an Array
const arrayOne = ["Dhaka", "Sylhet", "Chittagong", "Khulna"];
const arrayTwo = [12, 43, 657, 10];
const arrayThree = [];
const arrayFour = "Ja v a Scr ipt ";

/**
console.log(Array.isArray(arrayOne)); // True
console.log(Array.isArray(arrayTwo)); // True
console.log(Array.isArray(arrayThree)); // True
console.log(Array.isArray(arrayFour)); // false

if (Array.isArray(arrayFour) == true) {
  console.log("Array");
} else {
  console.log("Not an Array");
} 
 */
//---Print a message to the console indicating whether each variable is an array or not.--
Array.isArray(arrayFour) == true
  ? console.log("Array")
  : console.log("Not an Array");
