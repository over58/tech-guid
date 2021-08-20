function valid(str) {
  if(str.length === 0) return true
  if (str.length % 2 !== 0) return false
  var stack = [str[0]]
  for (var i = 1; i < str.length; i++) {
    if (
      (str[i] === ')' && stack[i - 1] === '(') ||
      (str[i] === '}' && stack[i - 1] === '}') || 
      ( str[i] === ']' && stack[i - 1] === '[' )
    ) {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }

  return !!stack.length
}

console.log(valid('()[]{'))
console.log(valid('()[]{}'))
console.log(valid('(){[]}'))