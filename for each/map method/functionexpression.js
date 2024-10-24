/* function expression = a way to define function 
as values or variables
1.call back in asynchronous operations
2.higher - order functions
3.closure
4.event listeners


*/
const nums=[1,2,3,4,5,6];
const s=nums.map(function(element){
  return Math.pow(element,2);
})
console.log(s);
const evenum=nums.filter(function(element){
  return element % 2===0;
})
console.log(evenum);

