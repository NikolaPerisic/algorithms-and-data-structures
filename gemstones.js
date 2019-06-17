/*
John has collected various rocks. Each rock has various minerals embeded in it. Each type of mineral is designated by a
lowercase letter. There may be multiple occurrences of a mineral in a rock. A mineral is called a gemstone if it occurs 
at least once in each of the rocks in John's collection.

Given a list of minerals embedded in each of John's rocks, display the number of types of gemstones he has in his collection.
For example, the array of mineral composition strings arr=[abc, abc, bc]. The minerals b and c appear in each composite, so
there are 2 gemstones.
*/

function gemstones(arr) {
    let gemstones = 0;
    let gemSet = new Set(arr[0].split("").map(el => el));
    for (let item of gemSet) {
        let gems = 1;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].includes(item)) {
                gems++;
            }
        }
        if (gems === arr.length) {
            gemstones++;
        }
    }
    return gemstones;
}
console.log(gemstones(["abcdde", "baccd", "eeabg"]));
