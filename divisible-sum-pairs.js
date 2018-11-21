// given an array of integers ar, positive integer k,
//determine the number of pair numbers where their 
//sum is divisible by k

function divisibleSumPairs(k, ar) {
    let output = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                output++;
            }
        }
    }
    return output;
}
console.log(divisibleSumPairs(3,[1,3,2,6,1,2]));