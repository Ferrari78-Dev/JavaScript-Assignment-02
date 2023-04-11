/*****************************Question-01********************************
Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it.
*/ 
function Addition(x) {
    return function(y) {
       return  x + y;
    }
  }

  let result = Addition(+5);
  console.log(result(5)); 

  let result1 = Addition(+5);
  console.log(result1(7)); 

   console.log("Submitted by Farah Uzma")


 
 