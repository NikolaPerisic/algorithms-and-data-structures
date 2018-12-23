/*
Lily likes to play games with integers. She has created a new game where she 
determines the difference between a number and its reverse. For instance, 
given the number 12, its reverse is 21. Their difference is 9.
She decides to apply her game to decision making. She will look at a numbered 
range of days and will only go to a movie on a beautiful day. Given the range
of days 'i' to 'j', and number 'k', determine the number of days in range that
are beautiful. Beautiful numbers are defined as those where 'i' - reverse'i'
is evenly divisible by 'k'. If a day's value is a beautiful number, it is a 
beautiful day. Print the number of beautiful days in the range.
*/

function beautifulDays(i, j, k) {
    let counter = 0;
    for (let x = i; x <= j; x++) {
        if (Math.abs(x - reverse(x)) % k === 0) {
            counter++;
        }
    }
    return counter;

    function reverse(n) {
        let rev = 0;
        while (n > 0) {
            rev = rev * 10 + (n % 10);
            n = Math.floor(n / 10);
        }
        return rev;
    }
}
console.log(beautifulDays(20, 23, 6));