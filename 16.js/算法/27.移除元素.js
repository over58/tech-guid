/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            for (let j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j+1]
            }
            nums.length = nums.length - 1
            i--
        }
    }
    return nums.length
};

// @lc code=end

