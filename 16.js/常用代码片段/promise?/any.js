Promise.any = function(ps) {
    let resolve
    let reject

    const promise = new Promise((r, j) => {
        resolve = r
        reject = j
    })

    let errCount = 0
    let pCount = 0

    for (const p of ps) {
        pCount++
        Promise.resolve(p).then(val => resolve(val), err=> {
            errCount++
            if(errCount >= pCount) {
                reject(new AggregateError("All promises were rejected"))
            }
        })
    }

    return promise
}