// src/index.js

const Koa = require('koa')
const { koaBody } = require('koa-body')
const app = new Koa()

app.use(koaBody())
app.use(async (ctx) => {
  if(ctx.method === 'POST') {
    const {user, email} = ctx.request.body || {}
    console.log(user,'user',email,'email')

    ctx.body = {
        status: 'success',
        user,
        email
    }
  }
})

app.listen(3004)

