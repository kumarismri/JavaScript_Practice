function replace(str){
  let arr = str.split("");
  for(let i=0;i<arr.length;i++){
    if(i==0){
      arr[i] = arr[i].toUpperCase()
    }
    if(arr[i]==="_"){
      arr[i+1] = arr[i+1].toUpperCase(); 
    }
  }
  return arr.join("").split("_").join(" ")
}

let str = "hi_dev_code";
console.log(replace(str))