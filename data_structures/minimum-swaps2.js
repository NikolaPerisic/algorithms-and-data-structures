/*
You are given an unordered array consisting of consecutive integers arr = [1, 2, 3, ..., n] without any duplicates. 
You are allowed to swap any two elements. You need to find the minimum number of swaps required to sort the array in 
ascending order.

For example, given the array arr = [7, 1, 3, 2, 4, 5, 6] we perform the following steps:

i   arr                     swap (indices)
0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
5   [1, 2, 3, 4, 5, 6, 7]
It took  swaps to sort the array.
*/
const minimumSwaps = arr => {
    let swaps = 0;
    let min = Math.min(...arr);
    let i = 0;
    while (i < arr.length) {
        if (i === arr[i] - min) {
            i++;
        } else {
            let index = arr[i] - min;
            let temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
            swaps++;
            i = 0;
        }
    }
    return swaps;
};
console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
console.log(minimumSwaps([5, 7, 6, 3, 4]));
