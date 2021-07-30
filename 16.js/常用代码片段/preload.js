// 图片预加载
function preload(src){
	return new Promise((resolve, reject) => {
		const img = new Image()
		img.onload = function() {
			resolve()
		}
		img.onerror = function(){
			reject()
		}
		img.src = src
	})
}