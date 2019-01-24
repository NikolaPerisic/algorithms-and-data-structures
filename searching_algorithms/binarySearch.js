// binary search

function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;
	let interval = 0;
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        if (key === arr[mid]) {
			console.log(`Interval ${interval} item found at index: ${mid}`);
            return mid;
        } else if (key < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
		console.log(`Interval ${interval} index: ${mid} - item not found`);
        mid = Math.floor((start + end) / 2);
		interval++;
    }
    return - 1;
}

// generate a sorted array filled with random numbers
function randomSortedFill(num) {
    let newArr = [];
    for (let i = 0; i < num; i++) {
        let randomNum = Math.floor(Math.random() * 20000);
        newArr.includes(randomNum) ? num++ : newArr.push(randomNum);
    }
    return newArr.sort((a, b) => a - b);
}

let test = randomSortedFill(10000);
console.log(binarySearch(test, 11520));