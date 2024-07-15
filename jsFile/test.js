"use strict";
// 'use strict';
//
// const fs = require('fs');
//
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
//
// let inputString = '';
// let currentLine = 0;
//
// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });
//
// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');
//
//     main();
// });
//
// function readLine() {
//     return inputString[currentLine++];
// }
//
//
//
// /*
//  * Complete the 'getMinCost' function below.
//  *
//  * The function is expected to return a LONG_INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY crew_id
//  *  2. INTEGER_ARRAY job_id
//  */
//
// function getMinCost(crew_id, job_id) {
//     // Write your code here
//     let n = crew_id.length;
//     let m = job_id.length;
//     let dp = new Array(n+1).fill(0).map(()=>new Array(m+1).fill(0));
//     for(let i=1; i<=n; i++){
//         dp[i][0] = dp[i-1][0] + crew_id[i-1];
//     }
//     for(let i=1; i<=m; i++){
//         dp[0][i] = dp[0][i-1] + job_id[i-1];
//     }
//     for(let i=1; i<=n; i++){
//         for(let j=1; j<=m; j++){
//             dp[i][j] = Math.min(dp[i-1][j]+crew_id[i-1], dp[i][j-1]+job_id[j-1]);
//         }
//     }
//     return dp[n][m];
//
// }
//
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//     const crew_idCount = parseInt(readLine().trim(), 10);
//
//     let crew_id = [];
//
//     for (let i = 0; i < crew_idCount; i++) {
//         const crew_idItem = parseInt(readLine().trim(), 10);
//         crew_id.push(crew_idItem);
//     }
//
//     const job_idCount = parseInt(readLine().trim(), 10);
//
//     let job_id = [];
//
//     for (let i = 0; i < job_idCount; i++) {
//         const job_idItem = parseInt(readLine().trim(), 10);
//         job_id.push(job_idItem);
//     }
//
//     const result = getMinCost(crew_id, job_id);
//
//     ws.write(result + '\n');
//
//     ws.end();
// }
