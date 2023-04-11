
/*****************************Question-05********************************
Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color.
*/ 

function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;  // set the background color of the HTML element
  }
  
let element = document.getElementById('myElement');  // get a reference to the HTML element
changeBackgroundColor(element, 'Green');  // change the background color to blue



