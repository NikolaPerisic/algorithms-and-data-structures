//John works at a clothing store. He has a large pile of socks 
//that he must pair by color for sale. Given an array of integers 
//representing the color of each sock, determine how many pairs 
//of socks with matching colors there are.
//function returns integer number of pairs with the same value;

function sockMerchant(ar) {
    let sorted = ar.sort();
    let counter = 0;
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] == sorted[i + 1]) {
            counter++;
            i++;
        }
    }
    return counter;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]));