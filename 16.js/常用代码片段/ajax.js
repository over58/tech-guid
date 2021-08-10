/**
 * 
 *readyState：存有服务器响应的状态信息。
    0: 请求未初始化（代理被创建，但尚未调用 open() 方法）
    1: 服务器连接已建立（open方法已经被调用）
    2: 请求已接收（send方法已经被调用，并且头部和状态已经可获得）
    3: 请求处理中（下载中，responseText 属性已经包含部分数据）
    4: 请求已完成，且响应已就绪（下载操作已完成）

    作者：郭先生_515
    链接：https://www.jianshu.com/p/ea064da40e25
    来源：简书
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

function ajax(url, data, options ={}){

    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        // xhr.setRequestHeader()
        const method = options.method ? options.method.toUpperCase()  :'GET'
        xhr.open(method, url, true)
    
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 ) {
                if (this.status === 200 || this.status === 304) {
                    resolve(xhr.responseText)
                } else {
                    reject(new Error(xhr.responseText))
                }
            }
        }
    
        xhr.send(data)
    })
}

ajax('https://www.baidu.com', null).then(a => {
    console.log('success')
    console.log(a)
}).catch((e) => {
    console.log('fail')
    console.log(e)
})