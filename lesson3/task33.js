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
const isIsomorphic = function (s, t) {
    // if diff size then isn't isomorphic
    if (s.length !== t.length)
        return false;

    // saving symbols in dict
    let dict = {};
    for (let i = 0; i < s.length; i++) {
        let s_char = s.charAt(i);
        let t_char = t.charAt(i);

        let key = getKeyByValue(dict, t_char)
        let value = getValueByKey(dict, s_char)

        // if key/value is present in dict and value/key isn't, then isn't isomorphic
        if ((key === undefined && value !== undefined) || (value === undefined && key !== undefined))
            return false;

        // if absent then add to
        if (key === value && key === undefined) {
            dict[s_char] = t_char;
        }

        // if key&value in dict but they're not the same
        if (dict[key] !== value)
            return false;

    }

    return true;
};

/**
 * @param {object} object
 * @param {string} value
 * @return {string}
 */
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

/**
 * @param {object} object
 * @param {string} key
 * @return {string}
 */
function getValueByKey(object, key) {
    return Object.values(object).find(value => object[key] === value)
}

console.log(isIsomorphic("paper", "title"));        // Output: true
console.log(isIsomorphic("egg", "add"));            // Output: true
console.log(isIsomorphic("foo", "bar"));            // Output: false
console.log(isIsomorphic("abc", "acc"));            // Output: false
console.log(isIsomorphic("abc", "abb"));            // Output: false
console.log(isIsomorphic("abb", "bab"));            // Output: false