let count = 0
function merge (l1, l2) {
	if(!l1.length) return l2
	if (!l2.length) return l1
	let large, small
	if(l1.length < l2.length) {
		large = [...l2]
		small = l1
	}else{
		large = [...l1]
		small = l2
	}

	let prev = -1

	for (let i = 0; i < small.length; i++) {
		// 往大数组里面插入
		for (let j = prev+1; j < large.length ; j++) {
			// 小于large[0]
			if(j=== 0 && small[i] < large[j]){
				large.unshift(small[i])
				prev = 0
				break
			}
			
			// 大于large[large.length - 1]
			if(j === large.length - 1 && small[i] >= large[j]) {
				large.push(small[i])
				prev = large.length - 1
				break
			}
			
			// 处于中间位置
			if((small[i] >= large[j] && small[i] <= large[j+1])) {
				large.splice(j+1, 0, small[i])
				prev = j+1
				break
			}
			
		}
	}
	count++ 
	return large
}

function mergeSort(arr) {
	const len = arr.length;
	if (len < 2) {
		return arr;
	}
	let middle = Math.floor(len / 2),
		left = arr.slice(0, middle),
		right = arr.slice(middle); // 拆分为两个子数组
	return merge(mergeSort(left), mergeSort(right));	
}

const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.time('归并排序耗时');
console.log('arr :', mergeSort(arr));
console.timeEnd('归并排序耗时');
console.log(count)

