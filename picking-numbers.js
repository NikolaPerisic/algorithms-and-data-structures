/*
Given an array of integers, find and print the maximum number of integers 
you can select from the array such that the absolute difference between any 
two of the chosen integers is less than or equal to 1. For example, if your 
array is a = [1,1,2,2,4,4,5,5] you can create two subarrays meeting the criterion:
[1,1,2,2] and [4,4,5,5,5]. The maximum length subarray has 5 elements.
*/

function pickingNumbers(a) {
    let counterArr = [];
    let counter = 0;
    let sorted = a.sort((x, y) => x - y, 0);
    let tempVal = sorted[0];
    for (let i = 0; i < sorted.length; i++) {
        if (Math.abs(sorted[i] - sorted[i + 1]) <= 1 && Math.abs(tempVal - sorted[i + 1]) <= 1) {
            counter++;
        } else {
            counter++;
            counterArr.push(counter);
            counter = 0;
            tempVal = sorted[i + 1];
        }
    }
    return Math.max(...counterArr);
}
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));