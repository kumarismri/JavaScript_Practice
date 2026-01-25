// function  myfunction(power){
//    return function root(number){
//         return number**power;
//     }
// }
// let n=3;
// const cube=myfunction(n);
// console.log(cube(2));


function callFunction(){
    let count=0
    return function insideFun(){
        if(count==0){
            count++;
        console.log("Hi you called me");
        
        }else{
            count++;
            console.log("you called me again");
        }
    }

}
const func=callFunction();
func();
func();
const func2=callFunction();
func2();
func2();

