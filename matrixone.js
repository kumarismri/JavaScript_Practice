let mat1=[[4,9,3],[3,5,7],[8,1,6]];
let n=3;
let flag=true;
let sum1=0;
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(j==(n-i-1)){
            sum1=sum1+mat1[i][j];
        }
    }   
}

for(let i=0;i<n;i++){
    let sum=0;
    for(let j=0;j<n;j++){
        sum=mat1[i][j]+sum;
    }
    if(sum!==sum1){
        flag=false;
    }
}

let sum2=0
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(j==i){
            sum2=sum2+mat1[i][j];
        }
    }   
}
if(sum2!==sum1){
    flag=false;
}

if(flag===true){
    console.log("yes");
}else{
    console.log("No")
}

