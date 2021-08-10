/**
 * 
 *  最佳情况：T(n) = O(n2)
	最差情况：T(n) = O(n2)
	平均情况：T(n) = O(n2)
 */
// 选择后面最小的元素
function selectionSort(nums){
	let minIndex 
	for (var i = 0; i < nums.length; i++) {
		minIndex = i
		for (var j = i+1; j < nums.length; j++) {
			if(nums[j] < nums[minIndex]) {
				minIndex = j
			}
		}
		let temp = nums[i]
		nums[i] = nums[minIndex]
		nums[minIndex] = temp
	}
	
	return nums
}

var nums = [1,8,5,10,2,345,5,3]

console.log(
	selectionSort(nums)
)