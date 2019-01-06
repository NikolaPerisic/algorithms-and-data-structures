/*
Given a 6 x 6 2D Array, we define an hourglass in A to be a subset of
values with indices falling with this pattern in arr graphical representation:

a b c
  d
e f g

There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' 
values. Calculate the hourglass sum for every hourglass in arr, then print the 
maximum hourglass sum.
*/

function hourglassSum(arr) {
    let sumArr = [];
    for (let i = 1; i < (arr.length - 1); i++) {
        for (let j = 1; j < (arr[i].length - 1); j++) {
            let temp = 0;
            temp = (arr[i][j] + arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1]);
            sumArr.push(temp);
        }
    }
    return Math.max(...sumArr);
}
console.log(hourglassSum([
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0]]));