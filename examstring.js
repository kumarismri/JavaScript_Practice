let str="my1kiran4name2is3";
let map=new Map();
let count=0;
for(let i=1;i<=str.length;i++){

    if(Number(str[i])>=1 && Number(str[i])<=9){
        let ch=str.slice(count,i);
         console.log(ch);
         map.set(str[i],ch);
         count=i+1;
   }
}   
let str1="";
map.forEach((value,key)=>{
    if(key>=1 && key<=9){
        key=" "
    }
    str1+=value+key;
})
console.log(str1)


// let ch="";
//     if(str[i]>=1 && str[1]<=9){
//         ch=str.slice(count+1,i);
//         console.log(ch);
//         map.set(ch,str[i]);
//         count=i;
// //     }

// console.log("hello")