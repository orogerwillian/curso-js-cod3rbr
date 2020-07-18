const gulp = require('gulp')
const uglifyCss = require('gulp-uglifycss')
const concact = require('gulp-concat')
const destPath = 'build/assets'

function depsCSS() {
    return gulp.src('node_modules/font-awesome/css/font-awesome.css')
        .pipe(uglifyCss({"uglyComments": false}))
        .pipe(concact('deps.min.css'))
        .pipe(gulp.dest(`${destPath}/css`))
}

function depsFonts() {
    return gulp.src('node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest(`${destPath}/fonts`))
}

module.exports = {
    depsCSS,
    depsFonts
}