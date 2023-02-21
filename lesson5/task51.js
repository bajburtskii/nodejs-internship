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
    const bracketsPair = new Map([ ['{', '}'], ['(', ')'], ['[', ']'] ])
    const reg = /[{|}|\[|\]|\(|\)]/g
    if (!(typeof s === 'string') || !s.match(reg)) return false
    if (s.length <= 1 || s.match(reg).length !== s.length || s.length % 2 === 1) return false
    for (let i = 0; i < s.length; i +=2) {
      if (s[i+1] !== bracketsPair.get(s[i])) return false
    }
    return true
  };
  
  console.log(isValid('()'))
  console.log(isValid('()[]{}'))
  console.log(isValid('(]'))
  console.log(isValid('fdgd[]f'))
  console.log(isValid(23432))
  console.log(isValid('[]{{()'))
  
  