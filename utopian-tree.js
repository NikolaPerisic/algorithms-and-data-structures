/*
The Utopian Tree goes through 2 cycles of growth every year. 
Each spring, it doubles in height. Each summer, its height 
increases by 1 meter. Laura plants a Utopian Tree sapling 
with a height of 1 meter at the onset of spring. How tall 
will her tree be after n growth cycles?
*/

function utopianTree(n) {
	let height = 1;
	if (n === 0) {
		return height;
	} else {
		for (let i = 1; i <= n; i++) {
			i % 2 !== 0 ? (height *= 2) : (height += 1);
		}
	}
	return height;
}
console.log(utopianTree(4));
