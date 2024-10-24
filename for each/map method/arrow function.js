/*
arrow function= a concise way to write a function expression good for simple function
that you use only once (parameters) => some code
*/
function hello(){
  console.log("hello");
}
hello();
const goodbye=function(){
  console.log("good bye");
}
goodbye();
const bye=(name) =>  console.log(`bye ${name}`);
bye("lubbb u");

const basic = (name,age)=> {
  console.log(`your name is${name}`);
  console.log(`you are ${age} years old`)

}
basic("karthick",20);
setTimeout(()=>
  console.log("hello")
,3000);

// we can use arrow function in every where like in methods 
//ex:map(),filter(),reduce()
const nums=[1,2,3,4,5,6];
const square=nums.map((element)=>Math.pow(element,2));
const cube=nums.map((element)=> Math.pow(element,3));
 const evennums=nums.filter((element)=> element%2===0);
 const oddnums=nums.filter((element)=> element%2!==0);
const total=nums.reduce((accumulator,element)=>accumulator+ element);
console.log(square);
console.log(cube);
console.log(evennums);
console.log(oddnums);
console.log(total);