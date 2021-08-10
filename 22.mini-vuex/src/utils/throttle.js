export default function throttle(fn, delay) {
    let prevTime
    let timer 

    return function(...args){
        let nowTime = Date.now()
        const context = this
        timer && clearTimeout(timer)

        if(nowTime - prevTime >= delay) {
            fn.apply(context, args)
            prevTime = Date.now()
            timer = null
            return 
        }

        timer  = setTimeout(() => {
            fn.apply(context, args)
            prevTime = Date.now()
            timer = null
        }, delay)
    }
}