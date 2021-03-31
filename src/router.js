const Router = require('koa-router');

const controllers = require('./controller');

const router = new Router();

router.get('/', controllers.index);
router.get('sign-in', controllers.signIn);
router.get('password-reset', controllers.passwordReset);
router.get('password-recovery', controllers.passwordRecovery);
router.get('sign-up', controllers.signUp);

module.exports = {
  router,
};
