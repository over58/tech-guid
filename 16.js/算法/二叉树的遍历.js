// 中序遍历
// 递归
function middleOrder(node){
	if(!node) return 
	node.left && middleOrder(node.left)
	console.log(node.value)
	node.right && middleOrder(node.right)
}

// 非递归
function middleOrder2(node){
	let stack = []
	let p = node
	while(p || stack.length !==0) {
		if(p) {
			stack.push(p)
			p = p.left
		}else{
			let node = stack.pop()
			console.log(node.value)
			p = node.right
		}
	}
}