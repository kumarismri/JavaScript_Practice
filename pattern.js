// Repeated Number Pattern
// 1
// 22
// 333
// 4444
// 55555

let n = 5;

for(let i=1; i<=n; i++){
    let row = ""
    for(let j=0; j<i; j++){
        row = row + i;
    }
    console.log(row)
}
// Inverted Triangle
// *****
// ****
// ***
// **
// *

let n = 5;

for(let i=0; i<n; i++){
    let row = "";
    for(let j=n; j>i; j--){
        row = row + "*"
    }
    console.log(row)
}
// Pyramid
//     *
//    ***
//   *****
//  *******
// *********

let n=5;

for(let i=0;i<5;i++){
    let row = "";
    
    for(let j=i; j<n-1; j++){
        row = row + " ";
    }

    for(let j=0; j<(2*i+1);j++){
        row = row + "*"
    }
    console.log(row)
}

// Floyd's Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10

// 1
// 2 3
// 4 5 6
// 7 8 9 10

let n = 4;
let count = 1;
for(let i=1; i<=n; i++){
    let row = "";
    for(let j=0;j<i;j++){
        row = row + " " + count++;
    }
    console.log(row)
}

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// console.log(half)
let n = 9;
let half = Math.floor(n / 2);

for (let i = 0; i < n; i++) {
    let row = "";

    let stars, spaces;

    if (i <= half) {
        spaces = half - i;
        stars = 2 * i + 1;
    } else {
        spaces = i - half;
        stars = 2 * (n - i) - 1;
    }

    for (let j = 0; j < spaces; j++) {
        row += " ";
    }

    for (let j = 0; j < stars; j++) {
        row += "*";
    }

    console.log(row);
}
//  |   1   | 
//  |  222  | 
//  | 33333 |
//  |4444444|
//  | 33333 |
//  |  222  |
//  |   1   |

let n = 7, half = Math.floor(n/2)
for(let i=0;i<n;i++){
    let row = "|"
    let start, space , str;
    if(i<=half){
        start = 2*i + 1
        space = half - i;
        str = start - i;
    }else{
        start = 2*(n-i) - 1;
        space = i-half;
        str = n - i;
    }
    for(let j=0 ;j<space; j++ ){
        row = row + " ";
    }
    for(let j=0; j<start;j++){
        row = row + str;
    }
    for(let j=0 ;j<space; j++ ){
        row = row + " ";
    }
    console.log(row + "|")
}




