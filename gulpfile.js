import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'gulp-postcss';
import rename from 'gulp-rename';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';

// Styles

export const styles = () => {
  return gulp.src('source/sass/style.scss', { sourcemaps: true }) //1. style.less найден файл
    .pipe(plumber()) // 2. в файле обрабатываются ошибки
    .pipe(sass().on('error', sass.logError)) // style.sass --> style.css
    .pipe(postcss([ // style.css
      autoprefixer(), // style.css -> превращается в style.css с префиксами
      csso() // style.css[prefix] -> превращается в style.css[prefix, min], т.е минимизируется код, удаляя ненужные символы,знаки и прочее
    ]))
    .pipe(rename('style.min.css')) // переименовать файл в min
    .pipe(gulp.dest('build/css', { sourcemaps: '.' })) // положить его в директорию
    .pipe(browser.stream());
}

// HTML
export const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build'));
}

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.scss', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
}


export default gulp.series(
  html, styles, server, watcher
);
