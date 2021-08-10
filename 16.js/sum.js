function sum (cur, res = 0) {
    if(cur<=0) return res
    res = cur + sum(cur - 1)
    return res
}

console.log(sum(100))