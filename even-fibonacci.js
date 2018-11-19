//get fibonacci sequence. Enter desireable count as
//an argument to the function

function fibonacci(num) {
    let result = [0, 1];
    for (let i = 2; i < num; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    return result;
}

// return sum of all even fibonacci nums
function evenFibonacci(arr) {
	let sum = [];
	for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sum.push(arr[i]);
			}
	}
	return sum.reduce((a, b) => a + b, 0);
}

console.log(evenFibonacci(fibonacci(10)));