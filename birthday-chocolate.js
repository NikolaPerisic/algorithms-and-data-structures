/*
Lily has a chocolate bar that she wants to share it with Ron for 
his birthday. Each of the squares has an integer on it. She decides 
to share a contiguous segment of the bar selected such that the length 
of the segment matches Ron's birth month and the sum of the integers on 
the squares is equal to his birth day. You must determine how many ways 
she can divide the chocolate.
Consider the chocolate bar as an array of squares,s=[2,2,1,3,2]. She wants 
to find segments summing to Ron's birth day, d=4  with a length equalling 
his birth month, m=2. In this case, there are two segments meeting her 
criteria: [2,2] and [1,3].
*/

function birthday(s, d, m) {
    let counter = 0;
    let sum = 0;
    let key = m;
    for (let i = 0; i < s.length; i++) {
        sum += s.slice(i, key).reduce((a, b) => a + b);
        if (sum === d) {
            counter++;
        }
        sum = 0;
        key++;
    }
    return counter;
}
console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1,], 18, 7));