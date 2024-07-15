"use strict";
/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
function countingValleys(steps, path) {
    // Write your code here
    let seaLevel = 0;
    let valleyCount = 0;
    if (steps === path.length) {
        for (let i = 0; i < steps; i++) {
            if (path[i] === 'U') {
                seaLevel++;
            }
            else {
                if (seaLevel === 0) {
                    valleyCount++;
                }
                seaLevel--;
            }
        }
    }
    console.log(valleyCount);
    return valleyCount;
}
let steps = 8;
let path = 'UDDDUDUU';
countingValleys(steps, path);
