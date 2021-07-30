function debounce(fn, wait = 1000, immediate = false){
	let timer = null
	
	return function(...args){
		timer && clearTimeout(timer)
		
		if(immediate && !timer) {
			fn && fn.apply(fn, args)
		}
		
		timer = setTimeout(() => {
			return fn && fn.apply(fn, args)
		}, wait)
	}
}

function print(arg){
	console.log(arg)
}

const fn = debounce(print)
fn(1)
fn(2)
fn(3)
fn(4)
fn(5)
fn(6)
fn(7)