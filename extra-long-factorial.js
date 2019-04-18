/*
A func to get extra long factorials in Javascript. Using BigInt (experimental technology)
*/

function extraLongFactorials(n) {
    let fact = BigInt(n);
    for (let i = n - 1; i > 0; i--) {
        fact *= BigInt(i);
    }
    return fact.toString();
}
console.log(extraLongFactorials(25));
