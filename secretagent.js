let myString="One Two three Four five six";
let arr=myString.split(" ");
let arr2=[];
let i=0;
for(let value of arr){
    if(value.length%2 !==0)(
       arr2[i]=value.split("").reverse().join("")
    )
    else{
        arr2[i]=value;
    }
    i++;
}
myString = arr2.join(" ");
console.log(myString);
