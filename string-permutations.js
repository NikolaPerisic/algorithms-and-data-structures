/*
Given a smaller string s and bigger string b, design an algorirthm to find all permutations of the shorter string within 
longer one. Print the location of each permutation.
*/

function stringPermutations(s, b) {
    let permutations = 0;
    for (let i = 0; i <= b.length - s.length; i++) {
        let test = b.substring(i, i + s.length).split("");
        let testOutput = [...test];
        for (let j = 0; j < s.length; j++) {
            if (test.includes(s[j])) {
                test.splice(test.indexOf(s[j]), 1);
            } else {
                break;
            }
        }
        if (test.length === 0) {
            permutations++;
            console.log(testOutput);
        }
    }
    return `Locations: ${permutations}`;
}
let s = "abbc";
let b = "cbabadcbbabbcbabaabccbabc";

console.log(stringPermutations(s, b));
