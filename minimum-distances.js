/*
We define the distance between two array values as the number of indices between the two values. Given 'a', find the 
minimum distance between any pair of equal elements in the array. If no such value exists, print -1.
For example, if ,a = [3,2,1,2,3] there are two matching pairs of values: 3 and 2. The indices of the 3's are i = 0 and 
j = 4, so their distance is d[i,j] = |j - i| = 4. The indices of the 2's are i = 1 and j = 3, so their distance is 
d[i,j] = |j - i| = 2. Return the minimum distance between any two matching elements.
*/
function minimumDistances(a) {
    let arr = [];
    let min;
    a.map((x, y) => {
        if (a.indexOf(x) !== y) {
            arr.push(y - a.indexOf(x));
        }
    });
    arr.length === 0 ? min = -1 : min = Math.min(...arr);
    return min;
}
console.log(minimumDistances([7,1,3,4,1,7]));
