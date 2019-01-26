/* Selection sort is quadratic time sorting algorithm, which generally
performs worse than insertion sort, but outperforms bubble sort in most
of the cases. The algorithm maintains two subarrays in a given array:
1. The subarray which is already sorted
2. Remaining subarray which is unsorted
In every iteration the minimum element from unsorted part (if found) 
is picked and swapped with the last element from sorted part.
*/
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let key = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[key]) {
                key = j;
            }
        }
        if (key !== i) {
            let temp = arr[key];
            arr[key] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
console.log(selectionSort([56,98,68,40,12,37,99,2]));