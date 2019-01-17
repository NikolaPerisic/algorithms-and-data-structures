/*
Lilah has a string, s, of lowercase English letters that she repeated infinitely many times. Given an integer, n, find and print the number of letter a's in the first n letters of Lilah's infinite string.
For example, if the string s=`abcac` and n=10, the substring we consider is abcacabcac, the first 10 characters of her infinite string. There are 4 occurrences of 'a' in the substring.
*/

function repeatedString(s, n) {
    let aCount, remainder, mod;
    if (s.length > n) {
        return s.substring(0, n).split("").filter(el => el === "a").length;
    } else {
        aCount = s.split("").filter(el => el === "a").length;
        aCount = aCount * Math.floor(n / s.length);
        remainder = (s.length * Math.floor(n / s.length));
        while (remainder < n) {
            mod = remainder % s.length;
            if (s[mod] === "a") {
                aCount++;
            }
            remainder++;
        }
    }
    return aCount;
}
console.log(repeatedString("aadcdaccacabdaabadadaabacdcbcacabbbadbdadacbdadaccbbadbdcadbdcacacbcacddbcbbbaaccbaddcabaacbcaabbaaa", 942885108885));