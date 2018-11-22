/*
Sam's house has an apple tree and an orange tree that yield an 
abundance of fruit. Imagine 's' is the starting point, and 't' is
the ending point of his house. Apple tree is to the left of the
house, and orange tree to the right. Tree locations are arguments
'a' for apple and 'b' for orange tree. Args'apples' and 'oranges'
are arr of integers representing location of each fallen fruit.
Determine where fruits fall from the tree, and if any fall on the
Sam's house, print the num of apples and oranges that fall in range
*/


// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let counterA = 0;
    let counterO = 0;
    let applesLocation = apples.map(x => x += a);
    let orangesLocation = oranges.map(y => y += b);
    applesLocation.forEach(function (x) {
        if (x >= s && x <= t) {
            counterA++;
        }
    });
    orangesLocation.forEach(function (y) {
        if (y >= s && y <= t) {
            counterO++;
        }
    });
    return "Apples: " + counterA + "\n"+ "Oranges: " + counterO;
}
console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 5],[-4, 6]));