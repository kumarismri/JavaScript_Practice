const heading1=document.querySelector("h1.heading1");
const heading2=document.querySelector("h1.heading2");
const heading3=document.querySelector("h1.heading3");
const heading4=document.querySelector("h1.heading4");
const heading5=document.querySelector("h1.heading5");
const heading6=document.querySelector("h1.heading6");
const heading7=document.querySelector("h1.heading7");

setTimeout(()=>{
    heading1.textContent="one";
    heading1.style.color="red";
    setTimeout(()=>{
        heading2.textContent="Two";
        heading2.style.color="green";
        setTimeout(()=>{
            heading3.textContent="three";
            heading3.style.color="cyan";
            setTimeout(()=>{
                heading4.textContent="four";
                heading4.style.color="violet";
                setTimeout(()=>{
                    heading5.textContent="five";
                    heading5.style.color="yellow";
                    setTimeout(()=>{
                        heading6.textContent="six";
                        heading6.style.color="green";
                        setTimeout(()=>{
                            heading7.textContent="seven";
                            heading7.style.color="pink";
                        },1000);

                    },1000);

                },1000);

            },1000);

        },1000);

    },1000);

},1000)
