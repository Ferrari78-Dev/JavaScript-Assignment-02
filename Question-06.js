
/*****************************Question-06********************************
Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store.
*/ 

function saveObjectToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  
 let myObject = {name: 'Ali', age: 30};  // create an example object
  saveObjectToLocalStorage('myObject', myObject);  // save the object to localStorage with a key of "myObject"
  
 
