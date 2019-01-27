var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require("gulp-cssmin");
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
  gulp.src("./scss/style.scss")
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: ["last 2 versions"],
    cascade: false
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./css'));
});

gulp.task('cssmin', function() {
  gulp.src('./css/style.css')
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./css'));
});

gulp.task('jsmin', function() {
  gulp.src('./js/common.js')
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./js'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/style.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);