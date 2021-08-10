/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let s = new Set()
    for(let i =0;i<nums.length;i++) {
        if(s.has(nums[i])) {
            // 原地移除
            for (let j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j+1]
            }

            nums.length = nums.length - 1
            i--
        }else{
            s.add(nums[i])
        }
    }
    return nums.length
};
// console.log(
//     removeDuplicates([1,1,2]       )
// )
// @lc code=end

