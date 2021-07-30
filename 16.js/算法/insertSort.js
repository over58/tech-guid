// 未排序的插入到已排序的队列中
function insertSort(nums){
	
	for (var i = 1; i < nums.length; i++) {
		let current = nums[i]
		let j = i - 1
		while(j>=0 && nums[j] > current){
			nums[j+1] = nums[j]
			j--
		}
		nums[j+1] = current
	}
	
	return nums
}

var nums = [1,8,5,10,2,345,4,3]

console.log(
	insertSort(nums)
)