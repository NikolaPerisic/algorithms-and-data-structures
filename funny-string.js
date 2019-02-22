/*
In this challenge, you will determine whether a string is funny or not. To determine whether a string is funny, create 
a copy of the string in reverse e.g. abc -> cba. Iterating through each string, compare the absolute difference in the 
ascii values of the characters at positions 0 and 1, 1 and 2 and so on to the end. If the list of absolute differences 
is the same for both strings, they are funny.
Determine whether a give string is funny. If it is, return Funny, otherwise return Not Funny.

*/

function funnyString(s) {
	const str1 = s;
	const str2 = s
		.split("")
		.reverse()
		.join("");
	for (let i = 0; i < str1.length - 1; i++) {
		if (
			Math.abs(str1.charCodeAt(i) - str1.charCodeAt(i + 1)) ===
			Math.abs(str2.charCodeAt(i) - str2.charCodeAt(i + 1))
		) {
			continue;
		} else {
			return "Not Funny";
		}
	}
	return "Funny";
}
console.log(funnyString("acxz"));
