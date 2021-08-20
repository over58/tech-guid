interface a {
    name : string
}

interface b{
    age: number
}


interface c extends a,b{
}


var data:c = {
    name: 'Tom',
    age: 10
}