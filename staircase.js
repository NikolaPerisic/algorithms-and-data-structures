//return n-height string staircase:

function staircase(n) {
    let str = "";
    let block = "#";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            str += " ";
        }
        for (let k = 0; k < i + 1; k++) {
            str += "#";
        }
        str += "\n";
    }
    return str;
}
console.log(staircase(16));