/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
        if (s.length === 0) return ''
        if (s.length === 1) return s
        let res = []
        for (let start = 0, len = s.length; start < len; start++) {
          let count = 1
          let str = s[start]+''
          let end = start + 1
          //   提前退出
          if(res.length > len - start + 1) {
              break
          }
          for (; end < len; end++) {
                str += s[end]
                count++
                if(str === str.split('').reverse().join('')) {
                    if(res.length < count) {
                        res = s.substr(start, count)
                    }
                }
          }
          if ((str === str.split('').reverse().join('') && res.length < count)) {
            res = s.substr(start, count)
          }
        }

        return res.toString('')
};

// console.log(longestPalindrome('babad'))
// console.log(longestPalindrome('cbbd'))
// console.log(longestPalindrome('aacabdkacaa'))
// console.log(
//   longestPalindrome(
//     'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'
//   )
// )
// @lc code=end

