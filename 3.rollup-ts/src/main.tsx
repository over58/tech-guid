import { print as printA } from './a'
import { print as printB } from './b'

interface Time {
    day: number
    hour: number
}

const t:Time = {
    day: 1,
    hour: 12
}

console.log(t)

printA()
printB()
