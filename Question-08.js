
/*****************************Question-08********************************
Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object.
*/ 

function saveObjectPropertiesToLocalStorage(object) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      localStorage.setItem(key, JSON.stringify(object[key]));  // serialize each property as a JSON string and store it in localStorage with the property name as the key
    }
  }
  var newObject = {};
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    newObject[key] = JSON.parse(localStorage.getItem(key));  // parse each JSON string from localStorage and store it as a property in the new object
  }
  return newObject;  // return the new object with the retrieved properties
}

var myObject = {name: 'Farah', age: 30, favoriteColor: 'blue'};  // create an example object
var retrievedObject = saveObjectPropertiesToLocalStorage(myObject);  // save the object's properties to localStorage, retrieve the object from localStorage, and return it as a new object
console.log(retrievedObject);  // log the new object to the console
