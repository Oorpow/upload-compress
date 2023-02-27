const Koa = require('koa')
const Router = require('@koa/router')
const multer = require('@koa/multer')
const cors = require('@koa/cors')
const serve = require('koa-static')

const app = new Koa()
const router = new Router()

let storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './uploads')
    },
    filename(req, file, cb) {
        let fileName = file.originalname.split('.')
        cb(null, Date.now() + '.' + fileName[fileName.length - 1])
    }
})

const upload = multer({
    storage
})

const uploadField = 'img'

router.post('/upload', upload.single(uploadField), (ctx) => {
    ctx.body = {
        code: 200,
        data: ctx.file
    }
})

app.use(serve('.'))
app.use(cors())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(5005, () => {
    console.log('正在监听5005端口')
})