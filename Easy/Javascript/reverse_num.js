/**
 * Leetcode 7
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit 
 * integer range [-231, 231 - 1], then return 0. Assume the environment 
 * does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Ex:
 * Input: x = 123
 * Output: 321
 * 
 * Input: x = -123
 * Output: -321
 * 
 * Input: x = 120
 * Output: 21
 * 
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let reverse_num = 0;
    // Check if number is negative
    let negative = x < 0;
    if(negative)
        x = x * -1;
    
    while(x > 0) {
        let remainder = x % 10; // 123 % 10 = 3
        x = Math.floor(x / 10); //  123 / 10 = floor(12.3) = 12

        reverse_num = (reverse_num * 10) + remainder; // (0 * 10) + 3 = 3
    }
    if(negative)
        reverse_num *= -1;
    
    if(reverse_num > (2 ** 31))
        return 0;
    
    return reverse_num;
};

console.log(reverse(-120))
console.log(reverse(20))
console.log(reverse(5323043326))