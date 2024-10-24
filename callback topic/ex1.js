/* call back = a function that is passed as an arguement
to another function .
used to handle asynchronous operations
1.reading a file
2.network requests
3.interacting with the db  
 "simple we can say hey when you're doone call this next"


*/

sum(displayconsole,5,6)
function sum(callback,x,y){
   let sum1=x+y;
  
  callback(sum1);
}
function displayconsole(sum1){
  console.log(`the sum of two number is ${sum1} `);
}