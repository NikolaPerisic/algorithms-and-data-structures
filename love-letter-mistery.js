/**
 * James found a love letter that his friend Harry has written to his girlfriend. James is a prankster, so he decides 
to meddle with the letter. He changes all the words in the letter into palindromes.
 * To do this, he follows two rules:
He can only reduce the value of a letter by 1, i.e. he can change d to c, but he cannot change c to d or d to b.
The letter a may not be reduced any further.
Each reduction in the value of any letter is counted as a single operation. Find the minimum number of operations 
required to convert a given string into a palindrome.

Input: string
Output: Integer
Constraints: only ascii A-Z a-z
Complexity: O(N)
EC: 
 */
function theLoveLetterMystery(s) {
    let counter = 0;
    let head = 0,
        tail = s.length - 1;
    while (head < tail) {
        if (s[head] !== s[tail]) {
            counter += Math.abs(s.charCodeAt(head) - s.charCodeAt(tail));
        }
        head++;
        tail--;
    }
    return counter;
}
console.log(theLoveLetterMystery("abcd"));
