/*
You are given a number of sticks of varying lengths. 
You will iteratively cut the sticks into smaller sticks, 
discarding the shortest pieces until there are none left. 
At each iteration you will determine the length of the 
shortest stick remaining, cut that length from each of 
the longer sticks and then discard all the pieces of that 
shortest length. When all the remaining sticks are the 
same length, they cannot be shortened so discard them.
Given the lengths of n sticks, print the number of sticks 
that are left before each iteration until there are none 
left.
===============================================
sticks-length        length-of-cut   sticks-cut
5 4 4 2 2 8             2               6
3 2 2 _ _ 6             2               4
1 _ _ _ _ 4             1               2
_ _ _ _ _ 3             3               1
_ _ _ _ _ _           DONE            DONE
*/
function cutTheSticks(arr) {
	const outputArr = [];
	let min = Math.min(...arr);
	let sticksCut = 0;
	while (arr.length > 0) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] - min >= 0) {
				arr[i] = arr[i] - min;
				sticksCut++;
			}
		}
		arr = arr.filter(el => el !== 0);
		outputArr.push(sticksCut);
		sticksCut = 0;
		min = Math.min(...arr);
	}
	return outputArr;
}
console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
