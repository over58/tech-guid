var Animal = {
    name: 'Animal'
}


var people = {
    name: 'people'
}

people.__proto__ = Animal


Object.freeze(people)

people['age'] = 10

people.__proto__['ccc'] = 'ccc'
console.log(people)
console.log(people.__proto__)