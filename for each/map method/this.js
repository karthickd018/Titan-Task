/*this = reference to the object where THIs is used 
(the object depends on the immediate context)
person.name=this.name
*/
const person1={
  firstname:"karthick",
  lastname:"D",
  age:"19",
  degree:"B.E",
  sayhello:function(){ console.log(`hello dude thi si ${this.firstname}`)},

}
const person2={
  firstname:"ben",
  lastname:"ten",
  age:"19",
  degree:"omnitrix",
  sayhi:function() { console.log(`hi dude this is ${this.firstname}`)},

}
person1.sayhello();
person2.sayhi();