// let str1="aaaaAAAA";
// let maxi=0,res;
// for(let i=0;i<str1.length;i++){
//     let count=0;
//     for(let j=i;j<str1.length;j++){
//         if(str1[i]==str1[j]){
//             count++;
//         }
//     }
//     maxi=Math.max(count,maxi);
//     if(count==maxi){
//         res=Math.max(str1.charCodeAt(i),str1.charCodeAt(res))
//     }else{
//         res=str1[i];
//     }  
// }
// console.log(res,maxi);

let str1="Statements are unique";
let res=new Map();

let count=0, maxi=0;
res.set(str1[0],maxi)

for(letter in str1){
    if(letter==res.letter){
        count++
    }

}