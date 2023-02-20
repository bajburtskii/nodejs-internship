/**
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 *
 * @example:
 *    Input: s = "egg", t = "add"
 *    Output: true
 *
 *  @example:
 *    Input: s = "foo", t = "bar"
 *    Output: false
 *
 *  @example:
 *    Input: s = "paper", t = "title"
 *    Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    const map = new Map(); // To track items of array S as keys and items of array T as values
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            if (map.get(s.charAt(i)) !== t.charAt(i)) return false;
        } else {
            map.set(s.charAt(i), t.charAt(i));
        }
    }
    return true;
};

console.log(isIsomorphic('egg', 'add')); // Output: true
console.log(isIsomorphic('foo', 'bar')); // Output: false
console.log(isIsomorphic('paper', 'title')); // Output: true