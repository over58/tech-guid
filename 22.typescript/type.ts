type aType = {
    name: string
}

type bType = {
  age: number
}


type cType = aType & bType

var c: cType = {
  name: 'aaa',
  age: 234
}

var a:aType = {name: 'aaa'}
a = c

