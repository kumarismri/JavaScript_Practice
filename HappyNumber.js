let num=16;
let res=num;
function Happynumber(num){
    sum=0;
    while(num!==0){
        let rem=Math.floor(num%10);
        console.log(rem);
        sum=rem*rem + sum;
        num=Math.floor(num/10);
    }
    console.log(sum)
    if(sum===1){
        console.log("true");
    }
    else if(res==sum){
        console.log("false")
    }else
    {
        Happynumber(sum);
    }
}
Happynumber(29);