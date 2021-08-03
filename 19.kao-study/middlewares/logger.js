module.exports = function()  {
    return async function(ctx, next) {
        let start = Date.now()
        await next()
        let end = Date.now()
        console.log(end - start)
    }
}