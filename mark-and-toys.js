/*
Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number 
of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to 
maximize the number of toys he buys with this money.
Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy?
*/

function maximumToys(prices, k) {
    const arr = prices.sort((a, b) => a - b);
    let total = 0,
        toys = 0;
    arr.map(el => {
        if (total + el <= k) {
            total += el;
            toys++;
        } else {
            return toys;
        }
    });
    return toys;
}
console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
