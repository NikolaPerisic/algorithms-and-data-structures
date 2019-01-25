/*
Insertion sort is a simple sorting algorithm which is quite efficient for small
data sets and when input is almost sorted.
*/

// insertion sort
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

console.log(insertionSort([5,64,2,18,23,65,99]));