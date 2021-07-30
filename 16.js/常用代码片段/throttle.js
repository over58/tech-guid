function throttle(fn, time = 1000) {
	let prev = 0
	return function(...args){
		if(Date.now() - prev >= time) {
			prev = Date.now()
			fn(...args)
		}else{
			console.log('忽略')
		}
		
	}
}

const fn = throttle(function(){
	console.log('aaaa')
})


const btn = document.querySelector('button')
btn.addEventListener('click', () => {
		console.log('click')
})
btn.addEventListener('click', fn)