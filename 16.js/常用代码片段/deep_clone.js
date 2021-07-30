function isPrimitive(value) {
	const type = typeof value
	return type === 'string' || type === 'number' || type === 'symbol' || type === 'boolean'
}

function isObject(value) {
	return Object.prototype.toString.call(value) === '[object Object]'
}

function deepClone(data) {
	// 处理循环引用
	let memo = {}
	
	function baseClone(value){
		let res
		if(isPrimitive(value)) {
			return value
		} else if(Array.isArray(value)) {
			res = [...value]
		} else if(isObject) {
			res = {...value}
		}
		
		Reflect.ownKeys(res).forEach(key => {
			if(isObject(res[key]) && res[key] !== null) {
				// 处理循环引用问题
				if(memo[res[key]]) {
					res[key] = memo[res[key]]
				}else{
					memo[res[key]] = res[key]
					res[key] = baseClone(res[key])
				}
			}
		})
		
		return res
	}
	
	return baseClone(data)
}

var data= {
	name: 'person',
	hobby: [
		'aaa',
		'bbb',
		{
			a:'c',
			c: 'd'
		}
	],
	c: Symbol('cccc'),
	d: function (){
		console.log('function')
	}
}


var a = deepClone(data)
console.log(a)
a.d()