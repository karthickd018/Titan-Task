/*class=(ES6 feature)  provides a more structured and cleaner way to work with objects compared to traditional constructor functions 
ex: static,encapsulation,inheritance
*/

class product{
  constructor(name,price){
    this.name=name;
    this.price=price;
  }
  displayProduct(){
    console.log(`the ${this.name} price is $${this.price}`);

  }
  displaysalesTax(salesTax){
    return this.price+(this.price*salesTax);
  }
}
let st=0.05;
const product1=new product("shirt",100.50);
const product2=new product("pant",20.05);
product1.displayProduct()
product2.displayProduct()
const total=product1.displaysalesTax(st);
console.log(`total price with sales tax is ${total}`);
