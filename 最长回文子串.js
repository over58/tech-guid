/**
 * @param {string} s
 * @return {string}
 */
let count = 0
var longestPalindrome = function (s) {
  var maxLen = 0
  var res = []
  s = s.split('')

  for (let i = 0; i < s.length; i++) {
    let endIndex = s.lastIndexOf(s[i])
    let strArr = s.slice(i, endIndex + 1)

    while (strArr.toString() !== strArr.reverse().toString() && endIndex > i) {
      endIndex = i + s.slice(i, endIndex).lastIndexOf(s[i])
      strArr = s.slice(i, endIndex + 1)
      count++
      if (maxLen > endIndex - i + 1) {
        break
      }
    }

    if (
      strArr.toString() === strArr.reverse().toString() &&
      maxLen < endIndex - i + 1
    ) {
      maxLen = endIndex - i + 1
      res = strArr
    }

    if (maxLen === s.length) {
      return s.join('')
    }
  }

  return res.join('')
}

// console.log(longestPalindrome('babad'))
console.log(
  longestPalindrome(
    'slvafhpfjpbqbpcuwxuexavyrtymfydcnvvbvdoitsvumbsvoayefsnusoqmlvatmfzgwlhxtkhdnlmqmyjztlytoxontggyytcezredlrrimcbkyzkrdeshpyyuolsasyyvxfjyjzqksyxtlenaujqcogpqmrbwqbiaweacvkcdxyecairvvhngzdaujypapbhctaoxnjmwhqdzsvpyixyrozyaldmcyizilrmmmvnjbyhlwvpqhnnbausoyoglvogmkrkzppvexiovlxtmustooahwviluumftwnzfbxxrvijjyfybvfnwpjjgdudnyjwoxavlyiarjydlkywmgjqeelrohrqjeflmdyzkqnbqnpaewjdfmdyoazlznzthiuorocncwjrocfpzvkcmxdopisxtatzcpquxyxrdptgxlhlrnwgvee'
  )
)

console.log(count)

// console.log(longestPalindrome('lhlpbqbpcuwx'))
// console.log(longestPalindrome('a'))
