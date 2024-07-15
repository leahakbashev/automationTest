'use strict';

const fs = require('fs');

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

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */
function getUniqueIntegers(arr){
    return [...new Set(arr)];
}
function occurrencesCunt(uniqueArr, arr){
    const counts = {};
    uniqueArr.forEach(color => {
        counts[color] = arr.filter(uniqueItem => uniqueItem === color).length;
    });
    return counts;
}
function countPairs(occurrencesCunt){
    let pairs = 0;
    for (const [num, count] of Object.entries(occurrencesCunt)){
        pairs += Math.floor(count/2);
    }
    return pairs;
}
function sockMerchant(n, ar) {
    // Write your code here
    let uniqueArr = getUniqueIntegers(ar);
    let countOccurrences = occurrencesCunt(uniqueArr,ar);
    return countPairs(countOccurrences);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
