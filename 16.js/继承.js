function A () {
    this.printA = function() {
        console.log('printA')
    }
}


function B() {
  this.printB = function () {
    console.log('printB')
  }
}


B.prototype = new A()

var b = new B()
b.printA()
b.printB()