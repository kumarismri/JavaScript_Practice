let n=6;
let arr=[12,65,15,55,19,45];
let inc=false;
let dec=false;
for(let i=1;i<=n-2;i+=2){
    if(arr[i]<=arr[i+2]){
        inc=true;
    }else{
        inc=false;
        break;
    }
}
for(let i=1;i<=n-2;i+=2){
    if(arr[i]>=arr[i+2]){
        dec=true;
    }else{
        dec=false;
        break;
    }
}
if(inc===true && dec===true){
    console.log("none");
}else if(dec===true){
    console.log("decre")
}else if(inc===true){
    console.log("inc")
}