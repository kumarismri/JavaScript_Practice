let n=5;
let arr=[100,-200,350,100,-600];
let newArr=[]
let finalSpeed=1500;

for(let i=0;i<n;i++){
    finalSpeed=arr[i]+finalSpeed;
    newArr.push(finalSpeed);
}
console.log("final speed: ", finalSpeed);
console.log("highest of the speed",Math.max(...newArr));