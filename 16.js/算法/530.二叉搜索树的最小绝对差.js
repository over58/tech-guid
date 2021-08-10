/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
   var nodes = []
   const traverse = (root) =>{
       if(root === null) return 
       nodes.push(root.val)
       traverse(root.left)
       traverse(root.right)
   }
   traverse(root)
   nodes.sort((a,b) => a-b)
   var min = Infinity

   for (let i = 1; i <= nodes.length - 1; i++) {
        min = Math.min(Math.abs(nodes[i] - nodes[i - 1]), min)
   }

   return min

};
// @lc code=end

