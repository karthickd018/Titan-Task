/*constructor = a special method for defining the properties and method for an object
this used for code reusability which reduces the bulk of lines in the code

*/
function car(company,model,price){
  this.company=company;
  this.model=model;
  this.price=price;
  this.modeldrive=function(){
    console.log(`you drive the car model ${this.model}`);
  }

}
const car1=new car("dodge","charger",1200000);
const car2=new car("ford","mustang",200005);
console.log(car1.company);
console.log(car1.model);
console.log(car1.price);
console.log(car2.company);
console.log(car2.model);
console.log(car2.price);
car1.modeldrive();
car2.modeldrive();


