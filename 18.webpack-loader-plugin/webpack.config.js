var x = 'abc12ddwd'



function statics(str) {

  let map = {}
  let word = ''
  let maxCount = 0

  for (let i = 0; i < str.length; i++) {
    if(str[i] in map) {
      map[str[i]]++ 
    }else{
      map[str[i]] = 1
    }

    if(map[str[i]] > maxCount) {
      maxCount = map[str[i]]
      word = str[i]
    }
  }

  return {
    word,
    maxCount
  }
}


console.log(statics(x))