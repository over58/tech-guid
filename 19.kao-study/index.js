const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path =  require('path')
const logger = require('./middlewares/logger')
const Router = require('koa-router')
const Static = require('koa-static')
const views = require('koa-views')

app.use(logger())
// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

const router = new Router()
router.get('/', async (ctx) => {
    await ctx.render('index', {
        title: 'home page',
        unescape: '<%>未加密的值<%><b>aaa</b>'
    })
}).get('/todo', async ctx => {
    await ctx.render('todo', {
        title: 'todo'
    })
}).get('/404', async ctx => {
    await ctx.render('404', {
        title: '404'
    })
})

// 测试get方式获取参数
router.get('/args', (ctx) => {
    ctx.type = 'application/json'
    ctx.body = {
        ctx_query: ctx.query,
        ctx_quertstring: ctx.querystring,
        ctx_request_query: ctx.request.query,
        ctx_request_querystring: ctx.request.querystring
    }
})

router.get('/cookie/set', async ctx => {
    ctx.cookies.set('name', 'hello', {
        domain: 'localhost',  // 写cookie所在的域名
        path: '/cookie',       // 写cookie所在的路径
        maxAge: 10 * 60 * 1000, // cookie有效时长
        expires: new Date('2021-08-15'),  // cookie失效时间
        httpOnly: false,  // 是否只用于http请求中获取
        overwrite: false  // 是否允许重写
    })
    ctx.body = 'cookie is ok'
})

router.get('/cookie', async ctx => {
    const name = ctx.cookies.get('name')
    ctx.body = name || ''
})


// 原生实现router
// async function render(page){
//     return new Promise((resolve, reject) => {
//         let viewUrl = `./views/${page}`
//         console.log(viewUrl)
//         fs.readFile(viewUrl, function(err, data) {
//             if(err) {
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// async function route(url){
//     let view = '404.html'
//     switch (url) {
//         case '':
//         case '/':
//         case '/index':
//             view = 'index.html'
//             break;
//         case '/todo':
//             view = 'todo.html'
//             break;
//         case '/404':
//             view = '404.html'
//             break;
//         default:
//             break;
//     }
//     html = await render(view)
//     return html
// }

app.use(Static(
    path.join( __dirname,  "./static")
))
app.use(router.routes(), router.allowedMethods())
app.use(async ctx => {
    const url = ctx.request.url
    ctx.type = 'text/html'
    const html = await route(url)
    ctx.body = html
})


app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')
