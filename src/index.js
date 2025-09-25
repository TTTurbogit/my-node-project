// src/index.js

const Koa = require('koa')
const { koaBody } = require('koa-body')
const Router = require('@koa/router')

const app = new Koa()
const router = new Router()

app.use(koaBody())

router.post('/api/user', (ctx) => {
    const { user, email } = ctx.request.body || {}
    console.log('user and email ', user, email)

    // 其他处理，如 await insertUserToDatabase(user, email)

    ctx.body = {
        status: 'success',
        user,
        email,
    }
})


app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3004)

