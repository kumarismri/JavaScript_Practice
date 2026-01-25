let A = [1,2,2,3,4,6,3,7];
let B = [1,2,2,3,4];
let mapA = new Map();

for(let i=0;i<A.length;i++){
    let count=0;
    let res;
    for(let j=i;j<A.length;j++){
        if(A[i]==A[j]){
            count++;
            res=A[i];
        }
    }
    console.log("count of" +res,count);
    mapA.set(res,count);
}
console.log(mapA);