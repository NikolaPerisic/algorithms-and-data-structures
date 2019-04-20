/*
Taum is planning to celebrate the birthday of his friend, Diksha. There are two types of gifts that Diksha wants from Taum: 
one is black and the other is white. To make her happy, Taum has to buy b black gifts and w white gifts.
The cost of each black gift is bc units.
The cost of every white gift is wc units.
The cost of converting each black gift into white gift or vice versa is z units.
Help Taum by deducing the minimum amount he needs to spend on Diksha's gifts.
Return the minimal cost of obtaining the desired gifts.

Input: int
Output: int
Constraints: 0 <= b,w,bc,wc,z <= 10^9
Complexity: O(1) ? 
EC: Integers exceeding js limit 2^53
*/

function taumBday(b, w, bc, wc, z) {
    let total = BigInt(0);
    let blackPrice = BigInt(bc),
        whitePrice = BigInt(wc),
        bigZ = BigInt(z);
    if (BigInt(wc) + bigZ < blackPrice) blackPrice = BigInt(wc) + bigZ;
    if (BigInt(bc) + bigZ < whitePrice) whitePrice = BigInt(bc) + bigZ;
    total = BigInt(b) * blackPrice + BigInt(w) * whitePrice;
    return total;
}
console.log(taumBday(443463982, 833847400, 429734889, 628664883, 610875522));
