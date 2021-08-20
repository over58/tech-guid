Promise.allSettled = function (ps) {
  let resolve
  let reject

  const promise = new Promise((r, j) => {
    resolve = r
    reject = j
  })

  let finishedCount = 0
  let index = 0
  const ret = []

  const wrapFulfilled = (i) => {
    return (val) => {
      finishedCount++
      ret[i] = {
        status: 'fulfilled',
        value: val
      }
      if (finishedCount >= index) {
        resolve(ret)
      }
    }
  }

  const wrapRejected = (i) => {
    return (err) => {
        finishedCount++
        ret[i] = {
            status: 'rejeced',
            value: err
        }
        if (finishedCount >= index) {
          resolve(ret)
        }
    }
  }

  for (const p of ps) {
    Promise.resolve(p).then(wrapFulfilled(index), wrapRejected(index))
    index += 1
  }

  return promise
}
