/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let start = 0
    for (let i = 0; i < nums2.length; i++) {
        const value = nums2[i]
        while (value < nums1[start++]) {
        }
        nums1.splice(start, 0, value)
    }

    return nums1
};
console.log(
    findMedianSortedArrays([1,3], [2])
)
// @lc code=end
