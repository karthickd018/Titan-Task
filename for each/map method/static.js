/* static keyword that define the properties or method that belong to a class
itself rather than objects created from that class 
(class owns anything static but not the object)
using th class name we can acess the properties and methods which is belong to static
*/
class user{
  static userCount=0;
  constructor(name){
    this.name=name;
    user.userCount++;
  }
  displayusername(){
    console.log(`the ${user.userCount} is ${this.name}`);
  }


static getUserCount(){
  console.log(`there are ${user.userCount} users in online`)

}
}
const user1=new user("karthi");
user1.displayusername();
user.getUserCount();