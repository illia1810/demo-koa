const gulp = require('gulp');
const sass = require('gulp-sass');
const nunjucks = require('gulp-nunjucks');
const gulpCopy = require('gulp-copy');
const nunjucksRender = require('gulp-nunjucks-render');
 
sass.compiler = require('node-sass');


function scssFolder(folderName){
  return gulp.src(folderName + '/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
}

function pages() {  
  return scssFolder('templates');
}

function css() {
  return scssFolder('public/css');
}

function preCompileTemplates(){
  return gulp.src('templates/**/*.html')      
      .pipe(nunjucks.precompile())
      .pipe(gulp.dest('./templates/'));
}
 
function compileTemplates(){
  return gulp.src('templates/**/*.html')      
      .pipe(nunjucks.compile())
      .pipe(gulp.dest('./pages/'));
}

function copyTemplatesImg(){
  return gulp.src('templates/**/img/*')
    .pipe(gulpCopy('./pages/', {prefix: 1}))
    .pipe(gulp.dest('./pages/'));
}


gulp.task('css', function () {
  return pages().on('finish', css);
});


gulp.task('html', function () {
  return compileTemplates()
    .on('finish', copyTemplatesImg);
});


gulp.task('img', function () {
  return copyTemplatesImg();
});