// filter()=filter the elements in the given array and return the array

const number=[1,2,3,4,5,6];
const evenum=number.filter(iseven);
console.log(evenum);
function iseven(element){
  return element%2===0;
}