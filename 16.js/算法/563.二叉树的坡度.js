/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    var sum = 0
    const sum = (node ) => {
        if(node === null) return 0
        return node.val+  sum(node.left) + sum(node.right)
    }
    if(node === null) return 0
    return Math.abs(sum(node.left) - sum(node.right)) + findTilt(node.left) + findTilt(node.right)

};
// @lc code=end

