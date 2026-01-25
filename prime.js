let n=10;
let countset= new Set()
function checkPrime(m){
    for(let j=2;j<m/2;j++){
        if(m%j!==0){
            countset.add(m);
        }else{
            break;
        }
    }
}
function countPrime(m){
    if(m==2){
        countset.add(m);
    }
    for(j=2;j<m;j++){
            checkPrime(m)
        }
}
for(i=2;i<n;i++){
    countPrime(i);
}
console.log(countset.size);
console.log(countset);