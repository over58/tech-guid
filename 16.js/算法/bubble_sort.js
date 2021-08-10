/**
 * 
 *  最佳情况：T(n) = O(n)
	当输入的数据已经是正序时（都已经是正序了，为毛何必还排序呢....）

	最差情况：T(n) = O(n2)
	当输入的数据是反序时(卧槽，我直接反序不就完了....)

	平均情况：T(n) = O(n2)

	https://juejin.cn/post/6844903444365443080#heading-5
 */
function bubbleSort(nums) {
	for (var i = 0; i < nums.length; i++) {
		// 标识此次循环有没有进行交换
		let flag = false
		for (var j = 0; j < nums.length - 1 - i; j++) {
			if(nums[j] > nums[j+1]) {
				flag = true
				var temp = nums[j]
				nums[j+1] = nums[j]
				nums[j] = temp
			}
		}
		if(flag) {
			break
		}
		
	}
	return nums
}

var nums = [1,8,5,10,2,345,5,3]

console.log(
	bubbleSort(nums)
)