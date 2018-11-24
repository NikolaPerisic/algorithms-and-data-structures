// Given a n square matrix, calculate the absolute difference between 
//the sums of its diagonals.
function diagonalDifference(arr) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        sum1 += arr[i][i];
        sum2 += arr[i][j];
    }
    return Math.abs(sum1 - sum2);
}
console.log(diagonalDifference([
            [11, 2, 4],
            [4, 5, 6],
            [10, 8, -12]]));