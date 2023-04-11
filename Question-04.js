
/*****************************Question-04********************************
Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item.
*/ 


function addListItem(text) {
    let newListItem = document.createElement('li');  // create a new list item element
    newListItem.innerText = text;  // set the text content of the new list item
    let list = document.querySelector('ul');  // select the unordered list to add the new list item to
    list.appendChild(newListItem);  // add the new list item to the unordered list
  }
  addListItem('water');  










