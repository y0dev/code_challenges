/**
 * 20. Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', 
 * '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 * 
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const openPars = {
        block: '[',
        bracket: '{',
        para: '('
    };

    const closePars = {
        block: ']',
        bracket: '}',
        para: ')'
    }
    let stack = [];
    var i = 0;
    while(stack.length > 0 || i < s.length)
    {
        if(s[i] === openPars.block || s[i] === openPars.bracket || s[i] === openPars.para) {
            stack.push(s[i]);
            console.log(`Opening: ${s[i]}`);
            i++;
            continue;
        }

        if(s[i] === closePars.block || s[i] === closePars.bracket || s[i] === closePars.para) {
            var top = stack[stack.length-1];
            if((s[i] === closePars.block && top === openPars.block) || 
            (s[i] === closePars.bracket && top === openPars.bracket) || 
            (s[i] === closePars.para && top === openPars.para)) {
                stack.pop();
                console.log(`Closing: ${s[i]}`);
                i++;
                continue;
            }
        }
        stack.pop();
        return false;
    }
    return true;
};

console.log(isValid('([])[]'));
console.log(isValid('()[]{}'));
console.log(isValid('('));