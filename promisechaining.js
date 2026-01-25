function promiseChaining(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
        reject("error")
    })
}

promiseChaining()
.then((value)=>{
    value+="Bar";
    return value;
}).then((value)=>{
    value+="baxx";
    return value;
}).then((value)=>{
    console.log(value)
}).catch((val)=>{console.log(val)})