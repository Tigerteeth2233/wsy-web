//server.js
const Koa = require('koa');
const app = new Koa();
 
//router
const Router = require('koa-router');
 
//父路由
const router = new Router();
//bodyparser:该中间件用于post请求的数据
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
const UserController = require('./server/controller/user.js');

const loginRouter = new Router();
loginRouter.post('/login', UserController.Login);

//装载上面四个子路由
router.use('/api',loginRouter.routes(),loginRouter.allowedMethods());

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(8888, () => {
    console.log('The server is running at http://localhost:' + 8888);
});