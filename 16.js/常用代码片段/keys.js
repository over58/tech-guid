
const a = {
    [Symbol('aaa')] : 'aaa',
    'bbb': 'bbb'
}

console.log(
    Object.getOwnPropertyNames(a)
)


console.log(
    Object.getOwnPropertySymbols(a)
)


console.log(
    Reflect.ownKeys(a)
)