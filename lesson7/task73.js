/**
 * Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.
 *
 * @example
 *    Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
 *    Output: 16
 *    Explanation: The two words can be "abcw", "xtfn".
 *
 * @example
 *    Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
 *    Output: 4
 *    Explanation: The two words can be "ab", "cd".
 *
 * @example
 *    Input: words = ["a","aa","aaa","aaaa"]
 *    Output: 0
 *    Explanation: No such pair of words.
 */

/**
 * @param {string[]} words
 * @return {number}
 */

let words = ["abcw","baz","foo","bar","xtfn","abcdef"];

let words1 = ["a","ab","abc","d","cd","bcd","abcd"];

let words2 = ["a","aa","aaa","aaaa"]
const maxProduct = function(words) {
    getMaxSum = (wordOne, wordTwo) => {
        if (wordOne.length > wordTwo.length)
            [wordOne, wordTwo] = [wordTwo, wordOne];
        let length = wordOne.length * wordTwo.length;
        for (let i = 0; i < wordOne.length; i++) {
            if (wordTwo.includes(wordOne[i])) {
                length = 0;
                break;
            }
        }
        return length;
    };

    let currentMax = 0;
    let totalMax = 0;
    for (let i = 0; i < words.length - 2; i++) {
        for (let j = i + 1; j < words.length; j++) {
            totalMax = Math.max(getMaxSum(words[i], words[j]), totalMax);
        }
    }
    return totalMax;
};

console.log("Words strok number one = " + maxProduct(words))
console.log("Words strok number two = " + maxProduct(words1))
console.log("Words strok number three = " + maxProduct(words2))
