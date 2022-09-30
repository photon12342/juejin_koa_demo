const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/api/get/userInfo', async (ctx) => {
  ctx.body = 'this is userInfo message';
})

app.use(router.routes()).use(async (ctx) => {
  ctx.body = '404: no router match';
})
app.listen(9000, () => {
  console.log('server is running, port is 9000');
}); 