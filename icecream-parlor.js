/*
Sunny and Johnny like to pool their money and go to the ice cream parlor. Johnny never buys the same flavor that Sunny does. 
The only other rule they have is that they spend all of their money.
Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.
For example, they have m=6 to spend and there are flavors costing cost=[1,3,4,5,6]. The two flavors costing 1 and 5 meet the 
criteria. Using 1-based indexing, they are at indices 1 and 4.

Input: num, num array
Output: indices arr
Constraints: There will always be a unique solution.
Complexity: O(N)
*/

// Attempt to solve in O(n):

const icecreamParlor = (m, arr) => {
    const mySet = new Set(arr.map(el => el));
    let indices = [];
    let found = null;
    for (let i = 0; i < arr.length; i++) {
        let num = m - arr[i];
        if (mySet.has(num)) {
            indices.push(i + 1);
            found = num;
            break;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === found && j !== indices[0] - 1) {
            indices.push(j + 1);
            break;
        }
    }
    return indices;
};
console.log(icecreamParlor(4, [1, 4, 5, 3, 2]));
