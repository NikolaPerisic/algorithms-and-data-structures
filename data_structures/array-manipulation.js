/*
Starting with a 1-indexed array of zeros and a list of operations, for each operation add 
a value to each of the array element between two given indices, inclusive. Once all operations 
have been performed, return the maximum value in your array.
For example, the length of your array of zeros n = 10. Your list of queries is as follows:

    a b k
    1 5 3
    4 8 7
    6 9 1

Add the values of k between the indices a and b inclusive:
index->	 1 2 3  4  5 6 7 8 9 10
	[0,0,0, 0, 0,0,0,0,0, 0]
	[3,3,3, 3, 3,0,0,0,0, 0]
	[3,3,3,10,10,7,7,7,0, 0]
    [3,3,3,10,10,8,8,8,1, 0]
    
    The largest value is 10 after all operations are performed.
*/

/*
First attempt at this resulted in easy approach where we run a loop from a and b and add x
to all elements from arr[a] to arr[b] but this ends up with timeouts since input value of n can
get very large (n*10^7).
Instead, only adding k to the first arr[a] and subtracting it from arr[b+1] resulting in O(1)
complexity. Keeping track of all positives and summing them up gives max value of arr.
*/
function arrayManipulation(n, queries) {
    const arr = Array.from(Array(n + 1), () => 0);
    let max = 0;
    queries.forEach((el) => {
        arr[el[0] - 1] += el[2];
        arr[el[1]] -= el[2]; 
    });
    arr.reduce((a, b) => {
        let acc = a + b;
        acc > max ? max = acc : max = max;
        return acc;
    });
    return max;
}
console.log(arrayManipulation(10, [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]));