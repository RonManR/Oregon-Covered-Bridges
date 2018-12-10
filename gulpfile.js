var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    console.log('Gulp js is running');
});


/* 
combines all less files. 
Compiles less files. 
Adds autoprefixer
Minify CSS
Moves less files to css folder
*/
gulp.task('less', function() {
    return gulp.src('styles/less/**/*.less')
    .pipe(concat('style.min.less'))
    .pipe(less())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('styles/css'));
});

/*
Combines all js files in the js/src folder
minifies files
moves file to js folder
*/
gulp.task('js', function() {
    return gulp.src('js/src/**/*.js')
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.eventNames('js'));
});

/* 
Watches for changes
runs the less task if less files are changed.

*/
gulp.task('watch:less', function() {
    gulp.watch('styles/less/**/*.less', ['less']);
});

