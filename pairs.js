/*
You will be given an array of integers and a target value. Determine the number of pairs of array elements that have a 
difference 'k' equal to a target value.
For example, given an array of [1, 2, 3, 4] and a target value of 1, we have three values meeting the condition: 2 - 1 = 1,
3 - 2 = 1, and 4 - 3 = 1.
Return an integer representing the number of element pairs having the required difference.

Input: int, array of ints
Output: int
Constraints: 2 <= n <= 10^5, 0 < k < 10^9, 0 < arr[i] < 2^31 - 1, each int ar[i] will be unique
Complexity: O(N)
EC: 
*/

// solution using hashset:

const pairs = (k, arr) => {
    let mySet = new Set(arr.map(el => el));
    let pairs = 0;
    for (let i = 0; i < arr.length; i++) {
        if (mySet.has(arr[i] + k)) {
            pairs++;
        }
    }
    return pairs;
};
console.log(pairs(2, [1, 5, 3, 4, 2]));
