/**
 * Numeros the Artist had two lists that were permutations of one another. He was very proud. Unfortunately, while 
transporting them from one exhibition to another, some numbers were lost out of the first list. Can you find the 
missing numbers?
 * As an example, the array with some numbers missing, arr=[7, 2, 5, 3, 5, 3]. The original array of numbers 
brr=[7, 2, 5, 4, 6, 3, 5, 3]. The numbers missing are [4, 6].

Input: arr
Output: arr
Constraints: print all the missing numbers in ascending order, each num once
Complexity:
EC: 
 */

// MISSING NUMS
function missingNumbers(arr, brr) {
    const myMap = new Map();
    brr.map(el => {
        if (myMap.has(el)) {
            myMap.set(el, myMap.get(el) + 1);
        } else {
            myMap.set(el, 1);
        }
    });
    let value;
    for (let i = 0; i < arr.length; i++) {
        if (myMap.has(arr[i])) {
            value = myMap.get(arr[i]);
            if (value > 0) {
                value--;
                myMap.set(arr[i], value);
            } else {
                return "Error, lists mismatch";
            }
        } else {
            return "Error, lists mismatch";
        }
    }
    let missing = [];
    for (let [key, val] of myMap) {
        if (val > 0) missing.push(key);
    }
    return missing.sort((a, b) => a - b);
}
console.log(
    missingNumbers(
        [203, 204, 205, 206, 207, 208, 203, 204, 205, 206],
        [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204]
    )
);
