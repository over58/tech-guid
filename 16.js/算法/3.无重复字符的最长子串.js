/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0
    if(s.length === 1) return 1
    let max_len = 0
    for(let i=0, len=s.length;i<len;i++) {
        let existSet = new Set()
        existSet.add(s[i])
        let count = 1
        for(let j=i+1;j<len;j++) {
            if(existSet.has(s[j])) {
                break
            }else{
                existSet.add(s[j])
                count++
            }
        }
        max_len = Math.max(max_len, count)
    }

    return max_len
};

// @lc code=end

