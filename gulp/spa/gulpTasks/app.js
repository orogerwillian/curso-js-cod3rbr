const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const uglifycss = require('gulp-uglifycss')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')
const destPath = 'build/assets'

function appHTML() {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'))
}

function appCSS() {
    return gulp.src('src/assets/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({uglyComments: true}))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(`${destPath}/css`))
}

function appJS() {
    return gulp.src('src/assets/js/**/*.js')
        .pipe(babel({presets: ['env']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(`${destPath}/js`))
}

function appIMG() {
    return gulp.src('src/assets/imgs/**/*.*')
        .pipe(gulp.dest(`${destPath}/imgs`))
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports = {
    appHTML,
    appCSS,
    appJS,
    appIMG
}