// 实现
Promise.prototype.finally = function (onFinished) {
    return this.then(val => {
        onFinished()
        return val
    }).catch((err) => {
        onFinished()
        return err
    })
}

// test
Promise.resolve(1).finally(() => {
    console.log('finally')
    // 返回值是不生效的
    // return 2
}).then((val) => {
    console.log(val)
})

/**
 * 1. finally 的回调没有参数
 * 2. promise 如果成功, 则将成功的值正常的传递下去，不会因为finally而断掉
 * 3. promise 如果失败，同上
 */