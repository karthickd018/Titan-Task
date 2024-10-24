const number=[20,3,45,6,89];
const total=number.reduce(sum);
console.log(total);
function sum(accumalator,element){
  return Math.min(accumalator,element);
}