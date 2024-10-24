const decrease=document.getElementById("decreasebtn");
const reset=document.getElementById("resetbtn");
const increase=document.getElementById("increasebtn");
let count=document.getElementById("count");
count=0;
decrease.onclick=function(){
  count--;
  document.getElementById("count").innerHTML=count
}
increase.onclick=function(){
  count++;
  document.getElementById("count").textContent=count
}
reset.onclick=function(){
  count=0;
  document.getElementById("count").textContent=count;
}