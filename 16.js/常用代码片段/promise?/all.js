Promise.all = function(ps) {
    let resolve
    let reject

    const promise = new Promise((r, j)=> {
        resolve = r
        reject = j
    })

    let fufilledCount = 0;
    let index = 0;
    const ret = []

    const wrapFufilled = (i) => {
        return val => {
            fufilledCount++
            ret[i] = val
            if(fufilledCount >= index) {
                resolve(ret)
            }
        }
    }

    const wrapRejected = (i) => {
        return err => {
            reject(err)
        }
    }

    for (const p of ps) {
        Promise.resolve(p).then(wrapFufilled(index), wrapRejected(index))
        index+= 1
    }


    return promise
}