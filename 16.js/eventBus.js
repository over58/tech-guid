//评测题目: 无

// 编写一个简单的自定义事件处理器
function EventEmitter () {
    _listeners = {}

  
  this.on = function (event, listener) {
  	if (event in _listeners) {
      _listeners[event].push(listener)
    } else {
      _listeners[event] = [listener]
    }
  }
  
  this.off = function(event){
    	_listeners[event] = []
//          or  delete this.listener[event]
    
  }
  
  this.trigger = function(event, args) {
    const a = _listeners['*'] || []
  	const b = _listeners[event] || []
    const listeners = [...a,...b]

    listeners.forEach((listener) => {
      listener.call(this, args)
    })
  }
}
var emitter = new EventEmitter();
emitter.on('foo', function(e){
   console.log('listening foo event', e);
});
emitter.on('*', function(e){
   console.log('listening all events');
});
emitter.trigger('foo', {name : 'John'});
emitter.off('foo');



function defer() {
  // TODO

  var _resolve
  var _reject

  const promise = new Promise((resolve, reject) => {
    _resolve = resolve
    _reject = reject
  })
  var s = {
    resolve: _resolve,
    reject: _reject,
    promise,
  }

  return s
}

var s = defer()
setTimeout(() => {
  s.resolve(true)
}, Math.random() * 1000)
setTimeout(() => {
  s.reject(false)
}, Math.random() * 100)

s.promise
  .then((val) => {
    console.log(val)
  })
  .catch((e) => {
    console.error(e)
  })
