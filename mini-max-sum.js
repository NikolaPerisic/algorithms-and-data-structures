/* Given arr of five positive integers, find the minimum and maximum
values that can be calculated by summing exactly four of the 
five integers.Then print the respective minimum and maximum 
values as a single line of two space - separated long integers.*/
function miniMaxSum(arr) {
    let sorted = arr.sort(function(a, b) {
        return a - b;
    });
    let minArr = sorted.slice(0, sorted.length - 1)
    	.reduce((a, b) => a + b, 0);
    let maxArr = sorted.slice(1)
    	.reduce((a, b) => a + b, 0);

    return minArr + " " + maxArr;
}
console.log(miniMaxSum([34,22,2,91,115]));