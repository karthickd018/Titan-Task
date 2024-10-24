function passgenerator(length,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
  const lc="abcdefghijklmnopqrstuvwxyz";
  const uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const num="1234567890";
  const sym="!@#$%^&*(_+=-;"
  let assume="";
  let finalpass="";
  assume+=includeLowerCase ? lc :"";
  assume+=includeUpperCase ? uc :"";
  assume+=includeNumbers ? num:"";
  assume+=includeSymbols ? sym :"";

  if(length<=0){
    console.log(`password length should be atleast 1`);
  }
  else if(assume.length==0){
    console.log(`atleast the password contain any of the characters like uppercase,lowercase,number etc...`)
  }
  else{
    for(let i=0;i<length;i++){
      finalpass+=assume[Math.floor(Math.random()*assume.length)];
      
      
    }
 
  }
  return finalpass;
  
}
const passwordLength=12;
const includeLowerCase=true;
const includeUpperCase=true;
const includeNumbers=true;
const includeSymbols=true;
const pass=passgenerator(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols)
console.log(`the generated password is ${pass} `);