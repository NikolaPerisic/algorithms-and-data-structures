/*
Alice has a binary string. She thinks a binary string is beautiful if and only if it doesn't contain the substring '010'.
In one step, Alice can change a 0 to a 1 or vice versa. Count and print the minimum number of steps needed to make Alice 
see the string as beautiful. For example, if Alice's string is b = '010' she can change any one element and have a 
beautiful string. Print the minimum number of steps needed to make the string beautiful.
*/
function beautifulBinaryString(b) {
	let minSteps = 0;
	let arr = b.split("");
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] === "1" && arr[i - 1] === "0" && arr[i + 1] === "0") {
			minSteps++;
			arr[i + 1] = "1";
		}
	}
	return minSteps;
}
console.log(beautifulBinaryString("0101010"));
