/*
In this challenge, you will be given an array of letter heights in the alphabet 
and a string. Using the letter heights given, determine the area of the rectangle 
highlight in mm^2 assuming all letters are 1mm wide.
For example, the highlighted word = 'torn'. Assume the heights of the letters are 
t = 2, o = 1, r = 1, n = 1. The tallest letter is 2 high and there are 4 letters. 
The hightlighted area will be 2 * 4 = 8mm^2 so the answer is 8.
*/

function designerPdfViewer(h, word) {
    let highest = 0;
    for (let i = 0; i < word.length; i++) {
        if (h[word.charCodeAt(i) - 97] > highest) {
            highest = h[word.charCodeAt(i) - 97];
        }
    }
    return highest * word.length;
}
console.log(designerPdfViewer(
    [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7],
    "zaba"));