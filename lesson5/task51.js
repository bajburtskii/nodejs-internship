/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * @example
 *    Input: s = "()"
 *    Output: true
 *
 * @example
 *    Input: s = "()[]{}"
 *    Output: true
 *
 * @example
 *    Input: s = "(]"
 *    Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    // We use Stack behaviour because we only focus at most recent opening bracket/parentheses
    const leftCharsStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') {
            leftCharsStack.push(s.charAt(i))
        } else {
            // We need to check is our stack empty because if we see closing bracket/parentheses
            // and we have no opening bracket/parentheses to match (in the stack) we can immediately return false
            // to determine that our string is not balanced
            if (leftCharsStack.length === 0) {
                return false;
            }
            // We need to ensure that opening bracket/parentheses has closing bracket/parentheses
            // If current closing bracket/parentheses does not match the last opening bracket/parentheses in our stack
            // we can immediately return false to determine that our string is not balanced
            if (s.charAt(i) === ')' && leftCharsStack.slice(-1)[0] !== '(' ||
                s.charAt(i) === '}' && leftCharsStack.slice(-1)[0] !== '{' ||
                s.charAt(i) === ']' && leftCharsStack.slice(-1)[0] !== '[') {
                return false;
            }
            // Otherwise we removing the last opening bracket/parentheses in the stack to focus on the next opening bracket/parentheses to match
            leftCharsStack.pop();
        }
    }
    // In case when have unmatched opening bracket/parentheses left
    return leftCharsStack.length === 0;
};

console.log(isValid("()")); //Output: true
console.log(isValid("()[]{}")); //Output: true
console.log(isValid("(]")); //Output: false
console.log(isValid("(()")); //Output: false
