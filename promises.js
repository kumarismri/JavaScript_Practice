const heading1=document.querySelector("h1.heading1");
const heading2=document.querySelector("h1.heading2");
const heading3=document.querySelector("h1.heading3");
const heading4=document.querySelector("h1.heading");
const heading5=document.querySelector("h1.heading5");
const heading6=document.querySelector("h1.heading6");
const heading7=document.querySelector("h1.heading7");

function PromiseDemo(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve()              
            }else{
                reject("error")
            }
        },time)
    })
}

PromiseDemo(heading1,"one","red",1000)
.then(()=>{return PromiseDemo(heading2,"two","violet",1000)})
.then(()=>{return PromiseDemo(heading3,"three", "yellow",1000)})
.then(()=>{return PromiseDemo(heading4,"four", "cyan",1000)})
.then(()=>{return PromiseDemo(heading5,"five", "green",1000)})
.then(()=>{return PromiseDemo(heading6,"six", "red",1000)})
.then(()=>{return PromiseDemo(heading7,"seven", "blue",1000)})
.catch((error)=>{console.log(error)})