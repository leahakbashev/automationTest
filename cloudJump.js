/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
    // Write your code here
    let jumps = 0;
    let i = 0;
    while(i < c.length - 1){
        if(c[i + 2] === 0){
            i += 2;
        }else{
            i += 1;
        }
        jumps++;
    }
}