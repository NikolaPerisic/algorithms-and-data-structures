/*
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method 
to rotate the image by 90 degrees?
*/

/*
 Input         Output
[1, 2, 3]     [7, 4, 1]
[4, 5, 6] =>  [8, 5, 2]
[7, 8, 9]     [9, 6, 3]

Input: NxN matrix
Output: NxN matrix rotation 90 degrees
Constraints: in place
Complexity: O(N^2)
*/

function rotateMatrix(arr) {
    if (arr.length !== arr[0].length || arr.length === 0) {
        return `Invalid matrix`;
    }
    const len = Math.floor(arr.length / 2);
    for (let i = 0; i < len; i++) {
        let first = i;
        let last = arr.length - 1 - i;
        for (let j = first; j < last; j++) {
            let offset = j - first;
            // memo top right
            let top = arr[first][j];
            // left -> top
            arr[first][j] = arr[last - offset][first];
            // bottom -> left
            arr[last - offset][first] = arr[last][last - offset];
            // right -> bottom
            arr[last][last - offset] = arr[j][last];
            // top -> right
            arr[j][last] = top;
        }
    }
    return arr;
}
console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
