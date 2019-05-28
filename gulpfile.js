const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style()
{
    return gulp.src('./src/scss/*.scss','./src/*.html')
    .pipe(sass())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream())
}

function watch()
{
    browserSync.init({
        server:{
            baseDir:'./dist'
        }
    });
    gulp.watch('./src/scss/*.scss',style);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);

}
exports.style = style;
exports.watch = watch;

