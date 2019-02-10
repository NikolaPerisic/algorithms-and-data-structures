/**
Sami's spaceship crashed on Mars! She sends a series of SOS messages to Earth for help.
Letters in some of the SOS messages are altered by cosmic radiation during transmission. Given the signal received by Earth as a string, s, determine how many letters of Sami's SOS have been changed by radiation.
For example, Earth receives SOSTOT. Sami's original message was SOSSOS. Two of the message characters were changed in transit. Return an integer representing the number of letters changed during transmission.
 */
function marsExploration(s) {
	let err = 0;
	const str = "SOS";
	for (let i = 0; i < s.length; i++) {
		s[i] !== str[i % 3] ? err++ : err;
	}
	return err;
}
console.log(marsExploration("SOSSPSSQSSOR"));
