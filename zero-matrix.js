/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.

    Input           Output
  [1, 2, 3, 4]    [1, 2, 0, 4]
  [1, 2, 0, 4] -> [0, 0, 0, 0]
  [5, 6, 7, 8]    [5, 6, 0, 8]

Input: arr
Output: arr
Constraints: Optimize
Complexity: O(MN)
EC: multiple zeroes in a row, row full of zeroes
*/

let matrix = [
    [1, 3, 4, 5, 6],
    [1, 0, 1, 0, 9],
    [5, 6, 4, 8, 3],
    [1, 2, 5, 7, 9]
];

const zeroMatrix = arr => {
    let zeroesIndex = new Set();
    let flag = -1;
    for (let i = 0; i < arr.length; i++) {
        if (zeroesIndex.size === arr[i].length) break;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                flag = 1;
                zeroesIndex.add(j);
            }
        }
        if (flag !== -1) {
            let newArr = Array.from(Array(arr[i].length), () => 0);
            arr[i] = newArr;
            flag = -1;
        }
    }
    if (zeroesIndex.size > 0) {
        for (let item of zeroesIndex) {
            arr.map(el => (el[item] = 0));
        }
    }
    return arr;
};

console.log(zeroMatrix(matrix));
