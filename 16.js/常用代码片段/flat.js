
function flat(arr) {
	let res = []
	let stack = [...arr]
	
	while(stack.length) {
		const value = stack.shift()
		Array.isArray(value) ? stack.push(...value) : res.push(value)
	}
	
	return res
}

function flat2(arr) {
	if(!Array.isArray(arr)) return [arr]
	
	return arr.reduce((value, cur) => {
		// 递归的形式处理这个东西
		return value.concat(Array.isArray(cur) ? flat2(cur) : cur)
	}, [])
}


var arr = [[2,[3,[4,[5]]]],1] 

console.log(
	flat(arr)
)

console.log(
	flat2(arr)
)
