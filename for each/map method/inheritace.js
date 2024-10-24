/*inheritance=  allows a new class to iherit properties ad methods from 
an existig class (parent-> child)
it helps with code reusability
*/
class Animal{
  alive=true;
  eat(){
    console.log(`the ${this.name} is eating`)
  }
  sleep(){
    console.log(`the ${this.name} is sleeping`)
  }
}
class Rabbit extends Animal{
  name="rabbit";

}
class Fish extends Animal{

name="fish"
}
const animal=new Animal();
const rabbit=new Rabbit();
const fish = new Fish();
console.log(animal.alive);
rabbit.alive=false;
console.log(rabbit.alive)
console.log(fish.alive)

rabbit.eat()
rabbit.sleep()
