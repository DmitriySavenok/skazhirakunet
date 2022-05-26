const { src, dest } = require('gulp');
const gulp = require('gulp');
const del = require('del');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browsersync = require('browser-sync').create();

var path = {
  build: {
      html: "dist/",
      js: "dist/js/",
      css: "dist/css/",
      images: "dist/img/",
      fonts: "dist/fonts/"
  },
  src: {
      pug: "src/pages/*.pug",
      js: "src/**/*.js",
      scss: "{src/style.scss,src/libraries/**/*.scss}",
      images: "src/images/**/*.+(png|jpg|gif|ico|svg|webp|avif)",
      fonts: "src/fonts/*.{ttf,otf,woff,woff2}"
  },
  watch: {
      pug: "src/**/*.pug",
      js: "src/**/*.js",
      scss: "src/**/*.scss",
      images: "src/images/**/*.+(png|jpg|gif|ico|svg|webp|avif)"
  },
  clean: "./dist"
}

function browserSync() {
  browsersync.init({
      server: {
          baseDir: "./dist/"
      },
      port: 3000,
      notify: false
  });
}

function html() {
  return src(path.src.pug)
    .pipe(pug())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.scss)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(gcmq())
    .pipe(autoprefixer({
      overrideBrowserslist: ["last 5 version"],
      cascade: true
    }))
    .pipe(sourcemaps.write())
    .pipe(rename({dirname: ''}))
    .pipe(dest(path.build.css))
    .pipe(cleanCSS())
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(rename({dirname: ''}))
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js)
    .pipe(rename({dirname: ''}))
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(rename({
      extname: ".min.js"
    }))
    .pipe(rename({dirname: ''}))
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
  return src(path.src.images)
    .pipe(dest(path.build.images))
}

function fonts() {
  return src(path.src.fonts)
    .pipe(dest(path.build.fonts))
}

function clean() {
  return del(path.clean);
}

function watchFiles() {
  gulp.watch([path.watch.pug], html);
  gulp.watch([path.watch.scss], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.images], images);
}

const build = gulp.series(clean, gulp.parallel(html, css, js, images, fonts));
const watch = gulp.parallel(build, watchFiles, browserSync);

/* Exports Tasks */
exports.html = html;
exports.fonts = fonts;
exports.css = css;
exports.js = js;
exports.images = images;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
