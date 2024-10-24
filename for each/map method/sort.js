
// const numbers=[2,10,5,1,22,9,43,7,13,3,33]
// numbers.sort((a,b)=>a-b)
// console.log(numbers)
// shuffle an array
const deck=['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
shuffle(deck);
console.log(deck);
function shuffle(array){

for(let i=deck.length-1;i>0;i--){
  const random=Math.floor(Math.random()*(i+1));
  [array[i],array[random]]=[array[random],array[i]]
}
}
