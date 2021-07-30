const Promise = require('./promise.js')

console.log(1)
var myP = new Promise(function(resolve, reject){
    console.log('执行', 2)
    setTimeout(function(){
        reject(4)
    }, 1000)
});

myP.then(function(res){
	console.log(4)
    console.log(res)
	return 10
},function(err){
    console.log('err', err)
	return 11
}).then((value) => {
	console.log(value)
}, function(err){
    console.log('err', err)
})
console.log(3)