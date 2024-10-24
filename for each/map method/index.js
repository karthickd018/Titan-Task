
/* map () = it is also similar to for each metho but it stores the value in new array
*/
const number=[1,2,3,4,5];
const squ=number.map(square);
const cubes=number.map(cube);

console.log(squ);
console.log(cubes);

function square(element){
  return Math.pow(element,2);
}
function cube(element){
  return Math.pow(element,3);
}

const names=["Karthi","kavin","loki"];
const uc=names.map(uppercase);
const lc=names.map(lowercase);
console.log(lc);
console.log(uc);
function uppercase(element){
  return element.toUpperCase();
}
function lowercase(element){
  return element.toLowerCase();
}


// codes to format the dates
 const dates=["2024-1-2","2024-5-1","2024-10-16"]
 const formattedDates=dates.map(formatdates);
 console.log(formattedDates);
 function formatdates(element){
  const parts=element.split("-");
  return ` ${parts[2]}/${parts[1]}/${parts[0]} `;
 }

