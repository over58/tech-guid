/*
 * @lc app=leetcode.cn id=832 lang=javascript
 *
 * [832] 翻转图像
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map(row => {
        return row.reverse()
    }).map(row => {
        return row.map(x=> {
            return x ? 0: 1
        })
    })
};
// @lc code=end

