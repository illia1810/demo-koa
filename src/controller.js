async function index (ctx){
  await ctx.render('index');  
}

async function signIn(ctx) {
  await ctx.render('sign-in/sign-in');  
}

async function passwordReset (ctx){
  await ctx.render('sign-in/password-reset');  
}

async function passwordRecovery (ctx){
  await ctx.render('sign-in/password-recovery');  
}

async function signUp (ctx){
  await ctx.render('sign-up/sign-up');  
}

async function search (ctx){
  await ctx.render('search/search');  
}

async function profile (ctx){
  await ctx.render('profile/profile');  
}

async function adminZone (ctx){
  await ctx.render('admin-zone/admin-zone');  
}

module.exports = {
  index,
  signIn,
  signUp,
  passwordReset,
  passwordRecovery,
  search,
  profile,
  adminZone
};
