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
        // if s lenght is not same as t length
        // strings are not isomorphic
        if (s.length !== t.length) {
            return false;
        }

        // Map is to store char pairs already completed
        const map = new Map();
        // Set is to store chars already used from second string
        const set = new Set();
 
        for (let i = 0; i < s.length; i++) {
            const char1 = s[i];
            const char2 = t[i];
            if (map.has(char1)) {
                // if a char from the second string is not 
                // matching with existing char in map
                // strings are not isomorphic
                if (map.get(char1) !== char2) {                    
                    return false;
                }
            } else {
                // if a char from the second string  
                // has already been used 
                // strings are not isomorphic
                if (set.has(char2)) {
                    return false;
                }
                // if all checks are passed, 
                // then these characters are used 
                // for the first time 
                // and we can write them down
                map.set(char1, char2); 
                set.add(char2);
            }
        }
        return true;
};

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true