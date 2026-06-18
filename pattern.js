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
