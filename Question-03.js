
/*****************************Question-03********************************
Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.
*/ 

function addNewParagraph(text) {
    // Create a new paragraph element
    let newParagraph = document.createElement("p");

    // Set the text content of the new paragraph element
    newParagraph.textContent = text;
    newParagraph.style.bottom = "10px";
  
    // Find the last element in the body of the HTML document
    let lastElement = document.body.lastElementChild;
  
    // Add the new paragraph element after the last element
    document.body.insertBefore(newParagraph, lastElement.nextSibling);
  }
  
  addNewParagraph("Hello, This is a new paragraph element!");
