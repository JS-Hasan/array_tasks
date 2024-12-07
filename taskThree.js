//3. Checking Array Membership with ‘includes’
const arrayBooks = ["History", "Literature", "Javascript", "Python"]; // Create an array of books containing different book.
console.log(arrayBooks.includes("Javascript")); //True
//console.log(arrayBooks.includes("Bangla")); // False
//console.log(arrayBooks.includes("javascript")); // False : Mismatching letter (Small Letter L)

//-------------------------------------
//Print a message to the console indicating whether the element is present in the array or not.
if (arrayBooks.includes("English")) {
  console.log("Available");
} else {
  console.log("Not Available");
}
