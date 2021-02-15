'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
    // it is ok to deal with it in JavaScript 
    // STACKOVERFLOW https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin#:~:text=Note%20that%20the%20bitwise%20operators,31%2D1%2C%20or%202%2C147%2C483%2C647.
    // js limit for Numbers is 2^53-1 REMEMBER: bitwise operations works only on 32bit integers
    let sum = 0;
    for (let i in ar){
        sum += ar[i]
    }
    return sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = aVeryBigSum(ar);

    ws.write(result + "\n");

    ws.end();
}
