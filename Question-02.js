
/*****************************Question-02********************************
2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.
*/ 

function searchArray(arr, val) {
    if (arr.length === 0) {
      // if the array is empty, the value is not found
      return false;

    } else if (arr[0] === val) {
      // if the first element of the array matches the value, return true
      return true;
    } else {
      // Recursive call the function 
      return searchArray(arr.slice(1), val);
    }
  }


  //Example 01
let numArr = [1, 2, 3, 4, 5];
let val = 5;

if (searchArray(numArr, val)) {
  console.log(`${val} found in the array`);
} else {
  console.log(`${val} not found in the array`);
}

 //Example 02
const stringArr = ["Happy", "Birthday", "to", "you"];
const stringVal = "You";

if (searchArray(stringArr, stringVal)) {
  console.log(`${stringVal} found in the array`);
} else {
  console.log(`${stringVal} not found in the array`);
}
