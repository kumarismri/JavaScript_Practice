let n=7;
let arr=["java","is","grails","is","also","great"];

let setArr = new Set(arr);
console.log(setArr);
let count=0;
setArr.forEach((value)=>{
    count++;
})
console.log(count);