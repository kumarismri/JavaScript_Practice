// let arr=[4,6,8,20,1,24];
// let n=arr.length;
// function gcdOfarray(a,b){
//     if(b==0){
//         return a;
//     }
//     else{
//         return gcdOfarray(b,a%b);
//     }
// }

// function passArray(n,arr){
//     let res=arr[0];
//     for(let i=0;i<n-1;i++){
//        if(arr[i]==1){
//         return 1;
//        }
//        res=gcdOfarray(arr[i],res)
//     }
//     return res;
// }

// console.log(passArray(n,arr))

// for(let i=2;i<n;i++){
//     arr1[i]=arr1[i-1]+arr1[i-2];
// }

function Tribinocci(n) {
    if (n <= 1) {
      return n;
    } 
    else if(n==2){
        return 1;
    }
    else {
      return Tribinocci(n - 1) + Tribinocci(n - 2)+ Tribinocci(n-3);
    }
  }
   
  let n = 5;
  console.log(Tribinocci(n));