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
let stroka_right = "add";
let temp_right = "egg";

let stroka_not_right = "foo";
let temp_not_right = "bar";
const isIsomorphic = function(s, t) {

    for (let idx = 0; idx < s.length; idx++) {

        if (s.indexOf(s[idx], idx + 1) !== t.indexOf(t[idx], idx + 1)) {

            return false;

        }

    }

    return true;

};
console.log(stroka_right + " " + temp_right + " \n" + isIsomorphic(stroka_right,temp_right) + "\n");
console.log(stroka_not_right + " " + temp_not_right + " \n" + isIsomorphic(stroka_not_right,temp_not_right));