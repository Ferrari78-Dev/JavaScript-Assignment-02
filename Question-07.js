
/*****************************Question-07********************************
Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object.\
*/ 

function getObjectFromLocalStorage(key) {
  // get the serialized JSON string from localStorage
  let object = localStorage.getItem(key); 
  // parse the JSON string back into a JavaScript object and return it 
  return JSON.parse(object);  
}
// retrieve the object with a key of "myObject" from localStorage
  let myObject = getObjectFromLocalStorage('myObject');  
console.log(myObject);  // log the object to the console