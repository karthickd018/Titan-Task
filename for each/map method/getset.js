// getter=special method that makes the property readable
// setter=special method that makes the property writeable
// validate and modify a value when reading /writing a property
class Rectangle{
  constructor(width,height){
    this.width=width;
    this.height=height
  }
  set width(newwidth){
    
    if(newwidth>0){
      this._width=newwidth
    }
    else{
      console.error("the width must be positive")
    }
  }
  set height(newheight){
    
    if(newheight>0){ 
      this._height=newheight
    }
    else{
      console.error("the height must be positive")
    }
  }
  get width(){
    return this._width;
  }
  get height(){
    return this._height;
    }
    get area(){
      return this._height*this._width;
    }
}
const rectangle=new Rectangle(3,4);
rectangle.width=5
console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)
console.log(typeof rectangle.width)

