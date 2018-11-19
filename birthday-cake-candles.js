/*You are in charge of the cake for your niece's birthday
and have decided the cake will have one candle for each 
year of her total age. When she blows out the candles, 
she’ll only be able to blow out the tallest ones. Your 
task is to find out how many candles she can successfully 
blow out. For example, if your niece is turning 4 years old, 
and the cake will have 4 candles of height 4,4,1,3, she will 
be able to blow out 2 candles successfully, since the tallest 
candles are of height 4 and there are 2 such candles.*/

function birthdayCakeCandles(ar) {
    let maxArr = [0];
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] > maxArr[0]) {
            maxArr[0] = ar[i];
        } else if (ar[i] === maxArr[0]) {
            maxArr.push(ar[i]);
        }
    }
    return maxArr.length
}
console.log(birthdayCakeCandles([6,1,4,6]));