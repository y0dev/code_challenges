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
    const stack = [];
    for(var i = 0; i < s.length;i++)
    {
        const char = s[i];
        console.log(char);
        if(char === '(' || char === '[' || char === '{')
            stack.push(char);
        else if (stack.length > 0 && char === ')' && stack[stack.length-1] === '(')
            stack.pop();
        else if (stack.length > 0 && char === ']' && stack[stack.length-1] === '[')
            stack.pop();
        else if (stack.length > 0 && char === '}' && stack[stack.length-1] === '{')
            stack.pop();
        else
            return false;
    }
    return stack.length < 1;
};

console.log(isValid('([])[]'));
console.log(isValid('()[]{}'));
console.log(isValid('('));