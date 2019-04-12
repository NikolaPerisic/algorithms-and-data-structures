/**
 * Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also 
valid if he can remove just 1 character at 1 index in the string, and the remaining characters will occur the same 
number of times. Given a string s, determine if it is valid. If so, return YES, otherwise return NO.
 * For example, if s='abc', it is a valid string because frequencies are {a:1, b:1, c:1}. So is s='abcc' because we 
can remove one 'c' and have 1 of each character in the remaining string. If s='abccc' however, the string is not 
valid as we can only remove 1 occurrence of 'c'. That would leave character frequencies of {a:1, b:1, c:2}.

Input: string
Output: string YES - NO
Constraints: 1 < n < 10^5
Complexity: O(N)
EC: All distinct chars, all same

 */
function isValid(s) {
    let stringMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (stringMap.has(s[i])) {
            let val = stringMap.get(s[i]);
            val++;
            stringMap.set(s[i], val);
        } else {
            stringMap.set(s[i], 1);
        }
    }
    if (stringMap.size === s.length) return "YES";

    let flag = 1;
    let runner = stringMap.get(s[0]);
    for (let val of stringMap.values()) {
        if (val === 1) {
            flag--;
        } else if (Math.abs(runner - val) > 0) {
            let diff = Math.abs(runner - val);
            if (diff > 1) return "NO";
            flag--;
        }
        if (flag < 0) return "NO";
    }
    return "YES";
}
console.log(
    isValid(
        "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
    )
);
