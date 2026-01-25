const Alphanumeric = (ch) => {
  return /^[a-zA-Z0-9]/.test(ch)
}

const palindrome = (str) =>{
   let i=0;
   let j=str.length - 1;
   str.toUpperCase()
   while(i<=j){
    if(!Alphanumeric(str[i])){
        i++;
        continue;
    }
    if(!Alphanumeric(str[j])){
        j--;
        continue;
    }
    if(str[i]===str[j]){
        i++;
        j--;
        continue;
    }
    else{
        return false;
    }
   }
   return true;
}

let str="race  car"
if(palindrome(str)){
  console.log("palindrome")
}
else{
    console.log("not palindrome")
}
