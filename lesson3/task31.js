/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
/* const isPalindrome = function(s) {
    if (s === '') {
        return 'Please enter a valid string.';
    }
    let clearString = s.toLowerCase().replace(/[\W_]/g, '');
    let reversedString = clearString.split('').reverse().join('');
    return reversedString === clearString;
};
console.log(isPalindrome(222)); // Output: Please enter a valid string.
console.log(isPalindrome('')); // Output: Please enter a valid string.
console.log(isPalindrome('A man, a plan, a canal. Panama;')); // Output: true  */


const isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, ""), // Remove all special chars except spaces
        start = 0, 
        end =  str.length - 1;

    while (start < end) {
        if (str.charAt(start) === ' ') { // If 'start' index is equal to space instead of a letter the index is incremented to step over
            start++;
            continue; // To start the loop with new value of 'start' index
        }
        if (str.charAt(end) === ' ') { // If 'end' index is equal to space instead of a letter the index is decrease to step over
            end--;
            continue; // To start the loop with new value of 'end' index
        }

        if (str.charAt(start) !== str.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }
        return true;
};

console.log(isPalindrome("Madam i'm adam")); // Output: true
console.log(isPalindrome('A man, a plan, a canal. Panama;')); // Output: true
console.log(isPalindrome("Mmdam i'm adam")); // Output: false



