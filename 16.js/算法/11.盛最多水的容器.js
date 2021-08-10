/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxCap = 0
    if(height.length < 2) return 0
    let start = 0
    let end = height.length - 1
    while (start < end) {
        let h 
        if(height[end] > height[start]) {
            h = height[start]
            start++
        }else{
            h = height[end]
            end--
        }
        if(h*(end-start + 1) > maxCap) {
            maxCap = h * (end - start + 1)
        }
    }
    return maxCap
};

// @lc code=end

