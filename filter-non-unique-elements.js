// Given an array of integers, return array of all non-unique elements 
// that appear in array
function nonUnique(arr) {
    let newArr = arr.filter((a) => arr.indexOf(a) !== arr.lastIndexOf(a));
    return newArr;
}
console.log(nonUnique([1, 2, 2, 3, 3, 5, 6, 7, 3, 9]));