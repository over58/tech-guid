Promise.reject = function(val) {
    return new Promise((_, reject) => {
        reject(val)
    })
}