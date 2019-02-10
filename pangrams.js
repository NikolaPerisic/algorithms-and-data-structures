/*
Roy wanted to increase his typing speed for programming contests. His friend suggested that he type the sentence "The quick brown fox jumps over the lazy dog" repeatedly. This sentence is known as a pangram because it contains every letter of the alphabet.
After typing the sentence several times, Roy became bored with it so he started to look for other pangrams.
Given a sentence, determine whether it is a pangram.
*/
function pangrams(s) {
	let str = s.toLowerCase().split("");
	for (let i = 97; i <= 122; i++) {
		if (!str.includes(String.fromCharCode(i)) && str[i] !== " ") {
			return "not pangram";
		}
	}
	return "pangram";
}
console.log(
	pangrams("We promptly judged antique ivory buckles for the next prize")
);
