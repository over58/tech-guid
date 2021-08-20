
console.log('a')
setTimeout(() => {
    console.log('setTimeout')

    process.nextTick(() => {
        console.log('setTimeout中的nextick')
    })
    process.nextTick(() => {
      console.log('setTimeout中的nextick2')
    })
}, 100);

const int = setInterval(() => {
    console.log('setInterval')
    clearInterval(int)
}, 1000);

new Promise((resolve, reject) => {
    resolve()
}).then(() => {
    console.log('promise')
})
process.nextTick(() => {
    console.log('nexttick1')
})
process.nextTick(() => {
  console.log('nexttick2')
})
process.nextTick(() => {
  console.log('nexttick3')
})
console.log('b')

// 执行顺序
/**
 * 1. 同步代码
 * 2. nextTickQueue
 * 3. microTaskQueue
 * 4. 一个 macroTask
 * 5. 到一
 */