/*
Alice wrote a sequence of words in CamelCase as a string of letters, s, having the following properties:
It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase. Given s, 
print the number of words in s on a new line.
*/

function camelcase(s) {
    let str = s.match(/[A-Z]*[^A-Z]+/g);
    return str.length;
}
console.log(camelcase('saveChangesInTheEditor'));