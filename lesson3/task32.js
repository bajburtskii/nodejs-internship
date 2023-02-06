/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * @example:
 *    Input: strs = ["flower","flow","flight"]
 *    Output: "fl"
 *
 *  @example:
 *    Input: strs = ["dog","racecar","car"]
 *    Output: ""
 *    Explanation: There is no common prefix amongst the input strings.
 *
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    if (strs.length <= 0) {
        console.error("strs.length < 0");
        return null;
    }

    let maxSize = Number.MAX_SAFE_INTEGER;
    let prefix = "";


    // find max prefix length
    for (let i = 0; i < strs.length; i++)
        if (maxSize > strs[i].length) {
            prefix = strs[i];
            maxSize = strs[i].length;
        }

    //
    for (let i = 0; i < strs.length; i++) {
        if (prefix.length === 0)
            break;
        prefix = compare(strs[i], prefix);
    }


    // printing result
    console.log(strs.toString() + "\t=>\t" + "Longest common prefix: " + prefix)

};

// symbol comparator
function compare(string, prefix) {
    for (let i = 0; i < prefix.length; i++)
        // if characters ain't equal then decrease prefix's size by 1 and compare again
        if (prefix.charAt(i) !== string.charAt(i))
            return compare(prefix.slice(0, prefix.length - 2), string);

    return prefix;
}

longestCommonPrefix(["test", "te2st", "testdfdfsf"])
longestCommonPrefix(["abc", "abcdfdfd", "sfdgfsg", "gdgfdgdf"])
longestCommonPrefix(["flower", "flow", "flight"])
longestCommonPrefix([])