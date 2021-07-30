Function.prototype._bind = function(thisArg){
    if(typeof thisArg === 'function') {
        throw new TypeError( 'Function.prototype.bind - what is trying to be bound is not callable' )

    }

    // 函数
    var fToBind = this
    var args = Array.prototype.slice.call(arguments, 1)
    var fnNop = function(){}
    var fnBound = function() {
        // this是当前函数的this
        var _this = fnNop.prototype.isPrototypeOf(this) ? this : thisArg
        return fToBind.apply(_this, args.concat(Array.prototype.slice(arguments)))
    }

    // 维护原型关系
    if(this.prototype) {
        fnNop.prototype = this.prototype
    }

    fnBound.prototype = new fnNop()

    return fnBound
}

var a = {
  name: 'aaa',
  fn: function (...args) {
    console.log(this.name)
    console.log(...args)
  },
}

var b = {
  name: 'bbb',
}

Function.prototype._apply = _apply

a.fn._apply(b, 1, 2, 3)
a.fn._apply(b)
