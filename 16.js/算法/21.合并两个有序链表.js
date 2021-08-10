/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

    // if(!l1.length) return l2
    // if (!l2.length) return l1
    // let large, small
    // if(l1.length < l2.length) {
    //     large = l2
    //     small = l1
    // }else{
    //     large = l1
    //     small = l2
    // }

    // let prev = -1

    // for (let i = 0; i < small.length; i++) {
    //     // 往大数组里面插入
    //     for (let j = prev+1; j < large.length; j++) {
    //         if(small[i] >= large[j] && small[i] <= large[j+1]) {
    //             large.splice(j+1, 0, small[i])
    //             prev = j+1
    //             break
    //         }
    //     }
    // }

    // return large

    if (l1 === null) return l2
    if(l2 === null) return l1

    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }else{
        l2.next = mergeTwoLists(l2.next, l1)
        return l2
    }
    
};

// console.log(mergeTwoLists([], []))
// @lc code=end

