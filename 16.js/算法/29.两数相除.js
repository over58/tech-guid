/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let flag = 1
    if((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        flag = -1
    }
    if (dividend === -2147483648 && divisor === -1) return 2147483647;

    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    let acc = divisor
    let count = 1
    while(acc<=dividend) {
        count++
        acc+=divisor
    }
    return flag*(count-1)
};

// @lc code=end

