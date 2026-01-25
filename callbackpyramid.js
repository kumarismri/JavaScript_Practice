const heading1=document.querySelector("h1.heading1");
const heading2=document.querySelector("h1.heading2");
const heading3=document.querySelector("h1.heading3");
const heading4=document.querySelector("h1.heading4");
const heading5=document.querySelector("h1.heading5");
const heading6=document.querySelector("h1.heading6");
const heading7=document.querySelector("h1.heading7");

function pyramid(element,color,item,time,onsuccess,failuer){
    setTimeout(()=>{
        if(element){
            element.textContent=item;
            element.style.color=color;
            if(onsuccess){
                onsuccess();
            }
        }else{
            failuer()
        }
    },time)
}

pyramid(heading1,"red","one",1000,()=>{
    pyramid(heading2,"green","two",1000,()=>{
        pyramid(heading3,"orange","three",1000,()=>{
            pyramid(heading4,"yellow","four","1000",()=>{
                pyramid(heading5, "cyan","five","1000",()=>{
                    pyramid(heading6, "violet","six","1000",()=>{
                        pyramid(heading7, "green","seven","1000",()=>{
                
                        },()=>{console.log(" error in code watch")})
                    },()=>{console.log(" error  in code watch")})
                },()=>{console.log("error  in code watch")})
            },()=>{console.log("error  in code watch")})
        },()=>{console.log("error  in code watch")})
    },()=>{console.log("error  in code watch")})
},()=>{console.log("error  in code watch")})