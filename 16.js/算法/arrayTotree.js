
const arr = [
  {
    id: 1,
    name: 'a',
    pid: 0,
  },
  {
    id: 2,
    name: 'b',
    pid: 1,
  },
  {
    id: 3,
    name: 'c',
    pid: 1,
  },
  {
    id: 4,
    name: 'd',
    pid: 2,
  },
  {
    id: 5,
    name: 'e',
    pid: 4,
  },
]


function arrayToTree(data){
    const result = []

    const map = data.reduce((acc, x ) => (acc[x.id] = x, acc), {})
    for (const item of data) {
        item.children = []
        if(item.pid === 0) {
            result.push(item)
            continue
        }
    
        if(item.pid in map) {
            const parent = map[item.pid]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }

    return result
}

const treeData = arrayToTree(arr)

console.log(JSON.stringify(treeData))


function treeToArray(data) {
    return data.reduce((acc, {id, name, pid, children}) => {
        return acc.concat({ id, name, pid }, treeToArray(children))
    }, [])
}

console.log(treeToArray(treeData))

function treeToArray2(data) {

    let result = []
    let stack = data
    while (stack.length) {
        const item = stack.shift()
        stack.push(...item.children)
        result.push({id: item.id, pid: item.pid, name: item.name})
    }

    return result
}
console.log(treeToArray2(treeData))
