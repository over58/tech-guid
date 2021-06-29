import { print as printA } from './a'
import { print as printB } from './b'

printA()
printB()

const test = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000);
})

test().then((data) => {
    console.log(data)
})