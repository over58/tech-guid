// // 格式化日期
// var date = new Date().toLocaleString()
// var formattedDate = date.replace(/(\d+)\/(\d+)\/(\d+)\s*[\u4e00-\u9fa5]+(\d+):(\d+):(\d+)/g, '$1/$2/$3 $4:$5:$6')
// console.log(date)
// console.log(formattedDate)

// const a = date.replace(/(\d+)\/(\d+)\/(\d+)\s*[\u4e00-\u9fa5]+(\d+):(\d+):(\d+)/g, function(all, g1, g2, g3, g4, g5,
// 	g6) {
// 	return [g1, g2, g3].join('/') + ' ' + [g4, g5, g6].join(':')
// })

// console.log(a)

// // 转换驼峰
// function camel(str) {
// 	return str.replace(/-\w/g, function(x){
// 		return x.slice(1).toUpperCase()
// 	})
// }

// console.log(
// 	camel('a-bbb-cccc')
// )

// 统计字符串中出现最多的字符和个数

function statisticWord(str){
	let res = ''
	let num = 0
	 // 使其按照一定的次序排列
	str = str.split('').sort().join('');
	// "aaabbbbbcccccccc"
	
	str.replace(/(\w)\1+/g, function(all, char) {
		if(all.length > num) {
			num = all.length
			res = char
		}
	})
	
	return {
		char: res,
		num
	}
}

console.log(
	statisticWord('abcabcabcbbccccc')
)

// 千分位分隔符

function parseMoney(num){
	num = parseFloat(num.toFixed(3))
	let [integer, decimal] = String.prototype.split.call(num, '.')
	console.log(integer)
	integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
	
	return integer + '.' + (decimal ? decimal : '');
}

console.log(
parseMoney(1134234234)
)