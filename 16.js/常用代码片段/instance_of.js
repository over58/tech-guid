function instanceOf(left, right) {
	if(!left || !right) return false
	right = right.prototype
	
	while(left = Object.getPrototypeOf(left)) {
		if(left === right) return true
	}
	
	return false
}

// test
var obj = {}
console.log(
	instanceOf(obj, Object)
)

console.log(
	instanceOf([], Object)
)

console.log(
	instanceOf(null, Object)
)

console.log( instanceOf(new String('aaa'), String))
console.log( instanceOf(new String('aaa'), Object))
console.log( instanceOf(new String('aaa'), Array))


var a = Object.create(null)
console.log(
	instanceOf(a, Object)
)