/* object=  A collection of a different properties and or a method of real world (people,places,car)
object={
key:value || key : funtion()} 
*/
const person1={
  firstname:"karthick",
  lastname:"D",
  age:"19",
  degree:"B.E",
  sayhello:()=> console.log("hello dude"),

}
const person2={
  firstname:"ben",
  lastname:"ten",
  age:"19",
  degree:"omnitrix",
  sayhi:()=> console.log("hi dude"),

}
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.age);
console.log(person1.degree);
person1.sayhello();

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.degree);
person2.sayhi();
