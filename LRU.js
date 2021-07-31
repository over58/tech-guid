function Node(key, value) {
  this.key = key

  this.value = value

  this.prev = null

  this.next = null
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity // 容量

    this.hash = {} // 哈希表

    this.count = 0 // 当前节点数量

    this.virtualNode = new Node() // 虚拟结点

    // 相互引用

    this.virtualNode.next = this.virtualNode

    this.virtualNode.prev = this.virtualNode
  }

  get(key) {
    const node = this.hash[key]

    if (node) {
      this.moveToHead(node)

      return node.value
    }
  }

  put(key, value) {
    const node = this.hash[key]

    if (node) {
      node.value = value

      this.moveToHead(node)
    } else {
      if (this.count === this.capacity) {
        this.removeLRUItem()
      }

      const newNode = new Node(key, value)

      this.hash[key] = newNode

      this.addToHead(newNode)

      this.count++
    }
  }

  remove(key) {
    const node = this.hash[key]

    if (node) {
      this.removeFromList(node)

      Reflect.deleteProperty(this.hash, key)

      this.count--
    }
  }

  isEmpty() {
    return this.count === 0
  }

  moveToHead(node) {
    this.removeFromList(node)

    this.addToHead(node)
  }

  removeFromList(node) {
    const prevNode = node.prev

    const nextNode = node.next

    prevNode.next = nextNode

    nextNode.prev = prevNode

    node.prev = null

    node.next = null
  }

  addToHead(node) {
    const nextNode = this.virtualNode.next

    this.virtualNode.next = node

    nextNode.prev = node

    node.prev = this.virtualNode

    node.next = nextNode
  }

  removeLRUItem() {
    const tailNode = this.virtualNode.prev

    this.remove(tailNode.key)
  }
}

const cache = new LRUCache(5)

console.log(cache.isEmpty())

cache.put('A', 'A')

cache.put('B', 'B')

cache.put('C', 'C')

cache.put('D', 'D')

cache.put('E', 'E')

console.log(cache.get('A'))

cache.put('F', 'F')

console.log(cache.get('B'))

console.log(cache.isEmpty())

cache.remove('E')

cache.remove('F')

cache.remove('A')

cache.remove('C')

cache.remove('D')

console.log(cache.isEmpty())

console.log(cache)
