/*
Given two sorted arrays, find the number of elements in common. The arrays are the same length and each has all distinct 
elements. The goal is to implement optimal algorithm that is close to BCR.
*/
/*
Brute Force: O(n^2)
Improved Algorithm: O(N log N) (binary search?)
Optimal(current): O(N)???
BCR: O(N)
 */

const a = [13, 27, 35, 40, 49, 55, 59];
const b = [17, 35, 39, 40, 41, 42, 43];

function elementsInCommon(a, b) {
    let found = 0;
    let sIndex = 0;
    if (a[0] > b[b.length - 1] || a[a.length - 1] < b[0]) return 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[b.length - 1]) break;
        if (a[i] === b[sIndex]) {
            found++;
            sIndex++;
        } else if (a[i] > b[sIndex]) {
            while (b[sIndex] < a[i]) {
                sIndex++;
                if (a[i] === b[sIndex]) {
                    found++;
                    sIndex++;
                }
            }
        }
    }
    return `Found ${found} pairs\nIndex of b arr at ${sIndex}`;
}
console.log(elementsInCommon(a, b));
