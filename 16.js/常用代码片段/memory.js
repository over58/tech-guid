function memory(fn) {
	const cache = {}
	
	return function(...args) {
		const key = JSON.stringify(args)
		if(cache[key]) {
			return cache[key]
		}else{
			return cache[key] = fn.apply(fn, args)
		}
	}
}