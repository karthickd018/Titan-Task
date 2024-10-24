/*nested objects= objects inside of other objects.
allows you to represent more complex data structures 
child object is enclosed by a parent object

person(address{},conctact info{})
*/
class Person{
  constructor(name,age,...address){
    this.name=name
    this.age=age
    this.address=new Address(...address)
  }
}
class Address{
  constructor(street,area,country){
    this.street=street
    this.area=area
    this.country=country
  }
}
const person1=new Person("karthick",21,"sidco","mudhalipalayam","america")
const person2=new Person("kavin",19,"sulur","coimabatore","india")
const person3=new Person("loki",22,"sundakapalayam","chennia","australia")
console.log(person2.name)
console.log(person2.age)
console.log(person2.address)
for(const property in person3.address){
  console.log(person3.address[property])
}
