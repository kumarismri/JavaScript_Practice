let str="AAAA";
let sum=0;
for(let i=0;i<str.length;i++){
   let char=str[i];
    sum=Math.pow(26,(str.length-(i+1)))*(char.charCodeAt(0)-64) + sum;
}
console.log(sum);