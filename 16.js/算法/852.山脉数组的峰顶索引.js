/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let l = 1;
    let r = arr.length - 2
    let ans = 0
    while(l<=r) {
        let mid = Math.floor((l+r)/2)
        if(arr[mid] > arr[mid+1]) {
           ans = mid
           r = mid - 1
        }else{
            l = mid+1
       }
    }
    return ans
};
// @lc code=end

