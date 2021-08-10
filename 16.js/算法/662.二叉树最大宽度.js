/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
var widthOfBinaryTree = function(root) {
    if(root === null) return 0
    let deep = 1
    const traverseDepp= (node) => {
        if(!node) return
        deep++
        if(node.left) {
           deep = traverseDepp(node)
        }

        if(node.right) {
           deep = traverseDepp(node)
        }
    }
    traverseDepp()
};
// @lc code=end

