/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if(num < 1 || num > 3999 ){ return ""; }
    let result = "";
    let roman_num = {
        M: 1000,    CM: 900,
        D: 500,     CD: 400,
        C: 100,     XC: 90,
        L: 50,      XL: 40,
        X:10,       IX: 9,
        V: 5,       IV: 4,
        I: 1,
    }
    let x = num;
    let rom_num;
    
    while(x > 0) {
        // Compare x to all values starting from the highest
        for (const key in roman_num) {
            if(x >= roman_num[key]) {
                rom_num = key;
                break;
            }
        }
        // Find number of roman numerals needed
        let temp = x / roman_num[rom_num];
        x = x % roman_num[rom_num];
        // Added roman numerals to the results string
        for(var i = 0; i < Math.floor(temp);i++) {
            result += rom_num;
        }
    }
    return result;
};

console.log(intToRoman(1995));
console.log(intToRoman(4));
console.log(intToRoman(53));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(9));