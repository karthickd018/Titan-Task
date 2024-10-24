hello(leave,goodbye);
goodbye();


function hello(callback1,callback2)

{
  console.log(`hello`);
  callback2();
  callback1();
}
function goodbye(){
  console.log(`goodbye`);
}
function leave(){
  console.log(`leave`);
}