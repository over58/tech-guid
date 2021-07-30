
function isArrayLike (o) {
    if(o && typeof o === 'object' &&  o.length >= 0 && o.length === Math.floor(o.length) && o.length < Math.pow(2,32)) {
        return true
    }else{
        return false
    }
}

const _apply = function(...params){
    let [context, ...others] = params
    context = context ? Object(context) : window
    const _symbol = Symbol('this')
    context[_symbol] = this
    let res
    if (others) {
        if(isArrayLike(others)) {
            context[_symbol](...others)
        }else{
            throw new Error('第二个参数不为数组并且不是类数组对象')
        }
    } else {
      res = context[_symbol]
    }

    delete context[_symbol]
    return res
}


var a = {
    name: 'aaa',
    fn: function(...args) {
        console.log(this.name)
        console.log(...args)
    }
}

var b= {
    name: 'bbb'
}

Function.prototype._apply = _apply

a.fn._apply(b, 1, 2, 3)
a.fn._apply(b)