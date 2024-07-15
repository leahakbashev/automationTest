/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */
function countA(s){
    let count = 0;
    for(let i=0; i<s.length; i++){
        if(s[i]==='a'){
            count++;
        }
    }
    return count;
}

function repeatedString(s, n) {
    let sLength = s.length;
    let count = 0;

    if(s !== '' && n !== 0){
        if (s.includes('a')){
            if (s.length === 1){
                count = n;
            }
            let numberOfRepetions = Math.floor(n/sLength);
            let remainderLength = n%s.length;
            count = countA(s)*numberOfRepetions
            if(remainderLength !== 0)
                count += countA(s.slice(0,remainderLength));
        }
    }
    else if (s.length< n) {
        count = countA(s.slice(0,n));
    }
    return count;
}

repeatedString('kmreta', 100000);
