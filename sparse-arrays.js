/*
There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of 
input strings.
For example, given input strings=['ab','ab','abc'] queries=['ab','abc','bc']
we find 2 intances of 'ab', 1 of 'abc', 0 of 'bc'. For each query, we add
an element to our return array, results = [2,1,0].
*/
function matchingStrings(strings, queries) {
    let outputArray = [];
    queries.map(function (str) {
        outputArray.push(0);
        strings.filter(function (item) {
            if (item === str) {
                outputArray[outputArray.length - 1]++;
            }
        });
    });
    return outputArray;
}
console.log(matchingStrings(["aba","baba","aba","xzxb"],
                            ["aba","xzxb","ab"]));