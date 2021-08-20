
// 全局变量global

console.log(
    global
)

// 全局变量console

console.warn('warn content')
// 断言 (condition, message)
console.assert(true, 'warn content')
console.assert(false, 'warn content')


console.log(
    global.console === console
)

console.log(global.setTimeout === setTimeout)
console.log(global.process === process)

console.log(
    __filename,
)
    
console.log(
    __dirname
)