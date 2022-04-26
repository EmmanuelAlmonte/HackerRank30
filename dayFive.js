'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Solution starts here.
function mutilplyTen (number) {
  // Placeholder will hold the value of the number that will be multiplied
    let placeHolder = number
    for(let x = 1; x <= 10; x++){
        number *= x
        console.log(`${placeHolder} x ${x} = ${number}`)
    // number has to be changed back to orignal value, so calcuations are correct.
        number = placeHolder
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    mutilplyTen(n)
    
}

