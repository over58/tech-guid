function once(fn) {
	let called = false
	
	return function(...args){
		if(called) return 
		called = true
		return fn && fn.apply(fn, args)
	}
}

const fn = once(function(){
	console.log(1111)
})

fn()
fn()
fn()
fn()