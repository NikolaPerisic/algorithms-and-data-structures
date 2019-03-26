/*
The counting sort is used if you just need to sort a list of integers. Rather than using a comparison, you create an 
integer array whose index range covers the entire range of values in your array to sort. Each time a value occurs in 
the original array, you increment the counter at that index. At the end, run through your counting array, printing the 
value of each non-zero valued index that number of times.
Given an unsorted list of integers, use the counting sort method to sort the list and then print the sorted list.
*/
const arr = [63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33]

function countingSort(arr) {
    let newArr = new Array(100).fill(0);
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[arr[i]]++;
    }
    for (let j = 0; j < newArr.length; j++) {
        if (newArr[j] !== 0) {
            for (let k = 0; k < newArr[j]; k++) {
                output.push(j);
            }
        }
    }
    return output;
}

console.log(countingSort(arr));
