//Time conversion 12h to 24h clock
function timeConversion(s) {
    let arr = s.split("");
    arr[1] = arr[0] + arr[1];
    arr[1] = parseInt(arr[1]);
    if (arr[8] == "A" && arr[1] == 12) {
        arr[1] = "0";
    }
    if (arr[8] == "P") {
        if (arr[1] > 12) {
            arr[1] = arr[1] - 12;
        } else if (arr[1] < 12) {
            arr[1] = arr[1] + 12;
        }
    }
    if (arr[1] < 10) {
        arr[1] = "0" + arr[1];
    }
    arr = arr.slice(0, arr.length - 2);
    arr.shift();
    return arr.join("");
}
console.log(timeConversion("04:45:59PM"));