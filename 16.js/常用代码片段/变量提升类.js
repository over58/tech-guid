var a = 1
function fn() {
  console.log(a)
  var a = 2
}
fn()

// 换成let 就不行 Reference Error