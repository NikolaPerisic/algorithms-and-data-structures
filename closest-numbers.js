/*
Given a list of unsorted integers arr, find the pair of elements that have the smallest absolute difference between them. 
If there are multiple pairs, find them all.
Constraints:
2 <= n <= 200000
-10^7 <= arr[i] <= 10^7
all arr[i] are unique
*/

const closestNumbers = arr => {
    let newArr = [...arr].sort((a, b) => a - b);
    let minDifferenceArr = [newArr[0], newArr[1]];
    let minDifference = Math.abs(newArr[0] - newArr[1]);
    for (let i = 0; i < newArr.length - 1; i++) {
        if (Math.abs(newArr[i] - newArr[i + 1]) < minDifference) {
            minDifferenceArr = [newArr[i], newArr[i + 1]];
            minDifference = Math.abs(newArr[i] - newArr[i + 1]);
        } else if (Math.abs(newArr[i] - newArr[i + 1]) === minDifference) {
            minDifferenceArr.push(newArr[i], newArr[i + 1]);
        }
    }
    return minDifferenceArr;
};
console.log(
    closestNumbers([
        -20,
        -3916237,
        -357920,
        -3620601,
        7374819,
        -7330761,
        30,
        6246457,
        -6461594,
        266854,
        -520,
        -470
    ])
);
