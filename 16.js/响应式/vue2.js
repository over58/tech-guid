function isObject (data) {
    return data && typeof data === 'object'
}

function observe(data){
    if(!isObject(data)) return data
    return new Observer(data)
}

// 添加不可遍历属性, 比如__ob__
export function def(data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: false, // 避免该属性被枚举
    get() {
      return value
    },
    set(newVal) {
      value = newVal
    }
  })
}


function defineReactive(data, key, value) {
  var property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get
  var setter = property && property.set


  let childOb = observe(value) // 对传入的每一项进项观测

  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get() {
      // 调用之前的getter
      var val = getter ? getter.call(obj) : value

      //   做依赖收集
    //  这里用到了childOb

      return val
    },

    set(newVal) {
     var oldValue = getter ? getter.call(obj) : val
     /* eslint-disable no-self-compare */
     if (newVal === oldValue || (newVal !== newVal && oldValue !== oldValue)) {
       return
     }
     if (getter && !setter) {
       return
     }
     if (setter) {
       setter.call(obj, newVal)
     } else {
       val = newVal
     }

      childOb = observe(newVal)

    //   notify
    },
  })
}

class Observer{
    constructor(data){
        this.data = data
        def(data, '__ob__', this)
        if(Array.isArray(data)) {
            this.observeArray(data)
        }

    }

    // 梳理对象
    walk (data) {
        for (const key in data) {
            defineReactive(data, key, data[key])
        }
    }

    // 处理数组
    observeArray (arr) {
        arr && arr.forEach(item => {
            observe(item) //对数组的每一项进行观测
        })
    }
}


// 处理数组
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto) // 根据数组的原型创建一个新的原型对象， 避免方法的无限循环
const methods = [
    "push",
    "pop",
    "shift",
    "unshift",
    "splice",
    "sort",
    "reverse"
]

methods.forEach(method => {
    arrayMethods[method] = function(...args) {
        const result = arrayProto[method].apply(this, args)
        const ob = this.__ob__

        let inserted 

        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice' :
                inserted = args.splice(2)
                break
            default:
                console.log('拦截的方法不存在')
        }

        if(inserted) {
            ob.observeArray(inserted)
        }

        return result
    }
})

