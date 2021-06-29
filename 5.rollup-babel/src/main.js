import { print as printA } from './a'
import { print as printB } from './b'

printA()
printB()

const testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    })
})

testPromise()