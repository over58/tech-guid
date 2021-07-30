var arr = [1,2,3,4,5]


// 同步求和

function add (a,b) {
	return a+b
}

function syncSum(arr){
	return arr.reduce((prev, cur) => {
		return add(prev, cur)
	},0)
}

console.log(
	syncSum(arr)
)


// 异步求和
  async function remoteAdd(a,b) {
	  return new Promise((resolve, reject)=> {
		setTimeout(()=> {
			resolve(a+b)
		}, 100)		  
	  })
  }



async function asyncSum (arr) {	
	const result = await arr.reduce(async (prev, cur)=>{
	   let a = await prev
	   return await  remoteAdd(a,cur)
	}, Promise.resolve(0))
	return result
}
asyncSum(arr).then((result) => {
	console.log(result)
})