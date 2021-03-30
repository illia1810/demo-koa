const Router = require('koa-router');

const router = new Router();
const controllers = require('./controller');

router.get('home', controllers.profile);

module.exports = {
  router,
};
