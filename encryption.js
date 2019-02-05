/**
An English text needs to be encrypted using the following encryption scheme. First, the spaces are removed from the text. Let L be the length of this text. Then, characters are written into a grid, whose rows and columns have the following constraints:
floor[sqrt(L)] <= row <= column <= ceil[sqrt(L)] where floor[x] is floor function and ceil[x] is ceil function.
For example, the sentence:
s = `if man was meant to stay on the ground god would have given us roots` after removing spaces is 54 characters long. sqrt(54) is between 7 and 8 so it is written in the form of a grid with 7 rows and 8 columns.

ifmanwas  
meanttos          
tayonthe  
groundgo  
dwouldha  
vegivenu  
sroots

Ensure that rows x columns >= L. If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. rows x columns.
The encoded message is obtained by displaying the characters in a column, inserting a space, and then displaying the next column and inserting a space, and so on. For example, the encoded message for the above rectangle is:
`imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau`
You will be given a message to encode and print.
*/

function encryption(s) {
    let outputArr = [];
    let arr = s.replace(/\s/g, '').split('');
    let i = Math.floor(Math.sqrt(arr.length));
    let j = i;
    let k = 0;
    (i * j) === arr.length ? j : j++;
    (i * j < arr.length) ? i++ : i;
    for (let x = 0; x < i; x++) {
        outputArr.push([])
        for (let y = 0; y < j; y++) {
            outputArr[x].push(arr[k]);
            k++;
        }
    }
    let str = '';
    for (let z = 0; z < j; z++) {
        outputArr.forEach(el => {
            el[z] ? str += el[z] : str;
        });
        str += ' ';
    }
    return str;
}
console.log(encryption('have a nice day'));