/**
 * Leetcode 9
 * Given an integer x, return true if x is palindrome integer.
 * 
 * An integer is a palindrome when it reads the same backward 
 * as forward. For example, 121 is palindrome while 123 is not.
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let negative = x < 0;
    if (negative) { return false; } // Ex: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
    let palindrome = 0;
    let tempX = x;
    while(tempX > 0) {
        let remainder = tempX % 10; // 123 % 10 = 3
        tempX = Math.floor(tempX / 10); //  123 / 10 = floor(12.3) = 12

        palindrome = (palindrome * 10) + remainder; // (0 * 10) + 3 = 3
    }
    return palindrome === x;
};

console.log(isPalindrome(121) ? "true" : "false");
console.log(isPalindrome(10) ? "true" : "false"); // Reads 01 from right to left. Therefore it is not a palindrome.
console.log(isPalindrome(-101) ? "true" : "false"); // Reads -101 from left to right and 101- from right to left. Therefore it is not a palindrome.