function curry(fn) {
	let params = []
	function next(...args){
		params = [...params, ...args]
		if(params.length < fn.length) {
			return next
		}else{
			return fn.apply(fn,params)
		}
	}
	return next
}

function sum(a,b,c,d){
	return a+b+c+d
}

const fn = curry(sum)
console.log(
	fn(1)(2)(3)(4)
)