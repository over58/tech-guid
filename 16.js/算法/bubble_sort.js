// O(n^2)
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