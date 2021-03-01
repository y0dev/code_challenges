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

    let wordQueue = [];
    let index = 1;
    for (let i = 0; i < strs[0].length; i++) {
        wordQueue.push(strs[0][i]);
    }

    while(wordQueue.length > 0 && index <= strs.length - 1) {
        let queueLength = wordQueue.length;
        let failed = false;
        for (let i = 0; i < queueLength; i++) {
            if(strs[index][i] === wordQueue.shift() && !failed) {
                wordQueue.push(strs[index][i]);
            } else {
                failed = true;
            }
        }
        index++;
    }
    
    let prefix = "";
    while(wordQueue.length > 0) {
       prefix += wordQueue.shift();
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["cir","car"]));