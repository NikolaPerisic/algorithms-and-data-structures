/*
Watson likes to challenge Sherlock's math ability. He will provide a starting 
and ending value describing a range of integers. Sherlock must determine the 
number of square integers within that range, inclusive of the endpoints.
Note: A square integer is an integer which is the square of an integer, 
e.g. 1, 4, 9, 16, 25.
For example, the range is a = 24 and b = 49, inclusive. There are three square 
integers in the range: 25, 36 and 49.
*/


/*
Here we might be tempted to use simplest algorithm that iterates
between the range of integers and checks for the condition, but with 
very large numbers we would quickly run into a time complexity issue.
So better approach is to determine the first square, and then iterate 
that square index until the index squared reaches b value.
*/
function squares(a, b) {
    let squareCounter = 0;
    let startIndex = 0;
    for (let i = a; i <= b; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            startIndex = Math.sqrt(i);
            squareCounter++;
            break;
        }
    }
    if (startIndex !== 0) {
        startIndex++;
        while (Math.pow(startIndex, 2) <= b) {
            squareCounter++;
            startIndex++;
        }
    }
    return squareCounter;
}
console.log(squares(465868129, 988379794));