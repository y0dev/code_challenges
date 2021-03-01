/**
 * Write a function to find the longest common prefix 
 * string amongst an array of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Examples:
 * 1) Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 2) Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * Constraints:
 * 1) 0 <= strs.length <= 200
 * 2) 0 <= strs[i].length <= 200
 * 3) strs[i] consists of only lower-case English letters.
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length < 1) { return ""; }

    let firstWord = strs[0];
    let index = 0;
    let prefix = "";

    for (const character of firstWord) {
        for (let i = 1; i < strs.length; i++) {
            let word = strs[i];
            let charAtIndex = word[index];
            
            if(charAtIndex !== character || index > word.length)
                return prefix;
            
        }
        index++;
        prefix += character;
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["cir","car"]));