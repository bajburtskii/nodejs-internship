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
  let sPattern = '',
      tPattern = ''
  let sIncrementer = 0,
      tIncrementer = 0
 
  if ((s.length !== t.length) || (typeof s !== 'string') || (typeof t !== 'string')) return false
  
  for (let i = 0; i < s.length; i++) {
    let sIsFirstOccurence = isFirstOccurence(s, i)
    let tIsFirstOccurence = isFirstOccurence(t, i)
    if (sIsFirstOccurence !== tIsFirstOccurence) return false // make no sense to continue, obviously not isomorphic
    !sIsFirstOccurence ? sPattern += sPattern.charAt(s.indexOf(s[i])) : sPattern += ++sIncrementer
    !tIsFirstOccurence ? tPattern += tPattern.charAt(t.indexOf(t[i])) : tPattern += ++tIncrementer    
  }
  return sPattern === tPattern 
}

const isFirstOccurence = function (word, index) {
  return !word.slice(0, index).includes(word[index])
}

// console.log(isIsomorphic('paper', 'title'))
// console.log(isIsomorphic('add', 'egg'))
console.log(isIsomorphic('ttoll', 'crall'))
// console.log(isIsomorphic('rrppprggtt', 'eeoooeuuii'))


// console.log(isIsomorphic('rorppejgg', 'gegooegtt'))
// console.log(isIsomorphic("SEE", "SAW"))


// Another solutions

// const isomorph = (a, b)=> {
//   const check = (string)=> {
//     let hash = {};
//     for (let i = 1; i < a.length; i++)
//       if (!hash[string[i]]) 
//         hash[string[i]] = i
//     return string.split('').map(lett=> hash[lett]).join``
//   }
//   return check(a) === check(b)
// }


// function isomorph(a, b) {
//   let oneway = (x, y) => {
//     let obj = {}
//     for (let i = 0; i < x.length; ++i) {
//       if (obj[x[i]] && obj[x[i]] != y[i]) return false
//       if (!obj[x[i]]) obj[x[i]] = y[i]
//     }
//     return true
//   }
//   return oneway(a, b) && oneway(b, a)
// }

// function isomorph(a, b) {
//   if( a.length !== b.length ) return false
  
//   function checkUniqueMapping(word1, word2) {
//     let words = {}
//     return word1.split('').map( (letter, i) => {
//         if ( !(letter in words) ) {
//           words[letter] = word2.charAt(i)
//           return true
//         }
//       else if( letter in words && words[letter] == word2.charAt(i)) return true
//       else return false
//     })
//   }

//   if(checkUniqueMapping(a, b).indexOf(false)>-1) return false
//   if(checkUniqueMapping(b, a).indexOf(false)>-1) return false
//   else return true
// }

