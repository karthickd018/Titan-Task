let minNumber=1;
let maxNumber=100;
let answer=Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber);
let guess;
let attempt=0;
let isRunning=true;
while(isRunning){
  guess=window.prompt(`guess the number between ${minNumber} to ${maxNumber}`);
  guess=Number(guess);
  if(isNaN(guess)){
    window.alert(`please enter a valid number`);
  }
  else if(guess<minNumber && guess>maxNumber){
    window.alert(`enter the number between the given range`);
  }
  else{
    attempt++;
    if(guess<answer){
      window.alert(`Too low,try again`)
    }
    else if(guess>answer){
      window.alert(`Too high,try again`)
    }
    else{
      window.alert(`yeah thats the correct number ${answer} and the attempts is ${attempt}`);
      isRunning=false;
    }
  }

}