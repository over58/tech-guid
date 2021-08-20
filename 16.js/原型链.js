Object.prototype.b = () => console.log(2)
Function.prototype.a = () => console.log(1)


function A() {}
// var a = new A()
// a.a()
// a.b()

// console.log(a.__proto__.__proto__)



function myNew(Ctor) {
    var obj = {}
    obj.__proto__= Ctor.prototype
    var result = Ctor.call(obj)
    
    return typeof result === 'object' ? result : obj
}


var newA = myNew(A)

newA.a()