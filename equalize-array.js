/*
Karl has an array of integers. He wants to reduce the array until all remaining elements are equal. Determine the minimum 
number of elements to delete to reach his goal.

For example, if his array is arr = [1,2,2,3], we see that he can delete 2 elements 1 and 3 leaving arr = [2,2]. He could 
also delete both twos and either 1 or 3, but that would take 3 deletions. The minimum number of deletions is 2.

Input: arr
Output: Int
Constraints: 
Complexity: O(N)
EC: all distinct nums
*/
function equalizeArray(arr) {
    let obj = {};
    let len = 1;
    for (let i = 0; i < arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]]++;
            if (obj[arr[i]] > len) {
                len = obj[arr[i]];
            }
        } else {
            obj[arr[i]] = 1;
        }
    }
    if (len === 1) return arr.length - 1;
    return arr.length - len;
}
console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]));
