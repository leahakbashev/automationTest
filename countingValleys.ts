/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps: number, path: string | any[]) {
    // Write your code here
    let seaLevel = 0;
    let valleyCount = 0;
    let inValley = false
    if(steps === path.length){
        for(let i=0; i<steps; i++){
            if(path[i]==='U'){
                seaLevel++;
            }
            else{
                seaLevel--;
            }
            if (seaLevel<0 && !inValley){
                inValley= true;
            }
            if(seaLevel==0 && inValley){
                valleyCount++;
                inValley=false;
            }
        }
    } else {return 0;}
    return valleyCount;
}

let steps:number = 8;
let path:string = 'UDDDUDUU';
countingValleys(steps, path);