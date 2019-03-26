/*
Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
*/

function bubbleSort(a) {
    let swaps = 0;
    let arr = [...a];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swaps++;
            }
        }
    }
    return `Array is sorted in ${swaps} swaps. \nFirst Element: ${
        arr[0]
    }.\nLast Element: ${arr[arr.length - 1]} \nOutput: ${arr}`;
}
console.log(bubbleSort([3, 4, 5, 1, 2, 7, 9, 8, 6]));
