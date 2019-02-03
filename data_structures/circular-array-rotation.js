/*
John Watson knows of an operation called a right circular rotation on an array of integers. One rotation operation moves the last 
array element to the first position and shifts all remaining elements right one. To test Sherlock's abilities, Watson provides 
Sherlock with an array of integers. Sherlock is to perform the rotation operation a number of times then determine the value of 
the element at a given position.

For each array, perform a number of right circular rotations and return the value of the element at a given index.
For example, array a = [3,4,5], number of rotations, k = 2 and indices to check, m = [1,2].
First we perform the two rotations:
[3,4,5] -> [5,3,4] -> [4,5,3]
Now return the values from the zero-based indices 1 and 2 as indicated in the m array. a[1] = 5, a[2] = 3.
*/

function circularArrayRotation(a, k, queries) {
    let key;
    let output = [];
    k < a.length ? key = a.length - k : key = a.length - (k % a.length);
    let newArr = a.slice(key).concat(a.slice(0, key));
    queries.forEach(el => output.push(newArr[el]));
    return output;
}
console.log(circularArrayRotation([0,1,2,3,4,5,6,7,8,9], 3, [0,1,2]));