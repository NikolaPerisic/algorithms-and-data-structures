/*
A modified Kaprekar number is a positive whole number with a special property. If you square it, then split the number into two integers and sum those integers, you have the same value you started with.
Consider a positive whole number n with d digits. We square n to arrive at a number that is either (2 x d) digits long or (2 x d) - 1 digits long. Split the string representation of the square into two parts, l and r. The right hand part, r must be d digits long. The left is the remaining substring. Convert those two substrings back to integers, add them and see if you get n.
For example, if n = 5, d = 1 then n^2 = 25. We split that into two strings and convert them back to integers 2 and 5. We test 2+5=7!=5, so this is not a modified Kaprekar number. If n = 9, still d = 1, and n^2 = 81. This gives us 1 + 8 = 9, the original n.
*/
// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
    let kaprekarArr = [];
    for (let i = p; i <= q; i++) {
        if (i === 1) {
            kaprekarArr.push(i);
        }
        let str = Math.pow(i, 2).toString();
        let split = Math.floor(str.length / 2);
        if (parseInt(str.substring(0, split)) + parseInt(str.substring(split)) === i) {
            kaprekarArr.push(i);
        }
    }
    console.log(kaprekarArr.length < 1 ? "INVALID RANGE" : kaprekarArr.join(" "));
}
kaprekarNumbers(1, 100);

/*
In mathematics, a Kaprekar number for a given base is a non-negative integer, the representation of whose square in that base can be split into two parts that add up to the original number again. For instance, 45 is a Kaprekar number, because 45² = 2025 and 20+25 = 45.
*/