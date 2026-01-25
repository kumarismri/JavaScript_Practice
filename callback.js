function addTwonumber(num1,num2,callback){
    callback(num1,num2);
}

addTwonumber(6,8,(p,q)=>{
    console.log(p+q)
})