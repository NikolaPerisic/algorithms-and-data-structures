/*Anna and Brian are sharing a meal at a restuarant and they agree 
to split the bill equally. Brian wants to order something that Anna 
is allergic to though, and they agree that Anna won't pay for that 
item. Brian gets the check and calculates Anna's portion. You must 
determine if his calculation is correct.*/

// bill - array of int representing the bill
// k - int representing zero based index of item Anna doesn't eat
// b - the amount of money that Anna contributed to the bill

/*Complete the bonAppetit function in the editor below. It should print 
Bon Appetit if the bill is fairly split. Otherwise, it should print the 
integer amount of money that Brian owes Anna.*/

function bonAppetit(bill, k, b) {
    let fairSplit = bill.filter(item => item != bill[k])
        .reduce((a, b) => a + b);
    if (fairSplit / 2 === b) {
        return "Bon Appetit";
    } else {
        return (b - (fairSplit / 2));
    }
}
console.log(bonAppetit([3,5,9,10], 1, 11));