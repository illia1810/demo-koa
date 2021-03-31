const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const views = require('koa-views');
const serve = require('koa-static');
const nunjucks = require('nunjucks');
const globalRouter = require('./src/router');

const app = new Koa();

const router = new Router();

const port = process.env.PORT || 3002;

nunjucks.configure('src/app/templates');

const render = views(path.join(__dirname, '/src/app/templates'), {
  extension: 'html',
  map: {
    html: 'nunjucks'
  },
});

app.use(render);

app.use(serve(path.join(__dirname, '/src/app/public')));

router.use('/', globalRouter.router.routes());

app.use(router.routes());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
