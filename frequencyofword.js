let n=5;
let s=["aman","aman","aa","aman","aa"];
s.sort();
let map1 = new Map();
let maxi=0;
for(let i=0; i<n; i++){
    if(map1.has(s[i])){
        let prevCount = map1.get(s[i]);
        map1.set(s[i],prevCount+1);
        maxi=prevCount;
    }
    else{
        map1.set(s[i],1);
    }
}
console.log(map1);
