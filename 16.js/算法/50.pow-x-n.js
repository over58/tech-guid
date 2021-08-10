/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let count = Math.abs(n)
    let res = 1
    for (let i = 0; i < count; i++) {
        res = res*x
    }

    if(n>0) {
        return res
    }else if(n<0) {
        return 1/res
    }else{
        return 1
    }
};


// @lc code=end

