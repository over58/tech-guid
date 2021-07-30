## macroTask 宏任务
- setTimeout
- setInterval
- setImmedidate
- I/O
- UI渲染


## microTask  微任务
- Promise
- Async
- process.nextTick
- MutationObserver
- Object.observe

## 执行顺序
1. 同步代码
2. 微任务队列一次执行结束
3. 取出一个宏任务执行
4. loop执行 1,2,3


## 执行上下文
- 全局上下文
- 函数上下文
- eval上下文