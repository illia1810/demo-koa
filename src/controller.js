async function index(ctx) {
  await ctx.render('index');
}

async function signIn(ctx) {
  await ctx.render('sign-in/sign-in');
}

async function passwordReset(ctx) {
  await ctx.render('sign-in/password-reset');
}

async function passwordRecovery(ctx) {
  await ctx.render('sign-in/password-recovery');
}

async function signUp(ctx) {
  await ctx.render('sign-up/sign-up');
}

module.exports = {
  index,
  signIn,
  signUp,
  passwordReset,
  passwordRecovery,
};
