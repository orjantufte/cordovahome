var gulp = require('gulp'),
    sass = require('gulp-sass'),
    //autoprefixer = require('gulp-autoprefixer'),
    //minifycss = require('gulp-minify-css'),
    webserver = require('gulp-webserver'),
    //jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    //imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    del = require('del'),
    browserSync = require('browser-sync'),
    //browserify = require('browserify'),
    source = require('vinyl-source-stream');

var reload = browserSync.reload;

var cb = function () {
    notify({ message: 'Something went wrong. Might be breaking somewhere.' });
}

//gulp.task('scss', function () {
//    return gulp.src('src/scss/**/*.scss')
//      .pipe(sass())
//      //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//      .pipe(gulp.dest('dist/css'))
//      .pipe(rename({ suffix: '.min' }))
//      //.pipe(minifycss())
//      //.pipe(gulp.dest('dist/css'))
//    //.pipe(notify({ message: 'SCSS task complete' }));
//        .on('end', cb);
//});

//gulp.task('js', function () {
//    return gulp.src(['src/js/**/*.js', '!src/js/**/*_test.js'])
//      //.pipe(jshint('.jshintrc'))
//      //.pipe(jshint.reporter('default'))
//      .pipe(concat('app.js'))
//      .pipe(gulp.dest('dist/js'))
//      .pipe(rename({ suffix: '.min' }))
//      .pipe(uglify())
//      .pipe(gulp.dest('dist/js'))
//    //.pipe(notify({ message: 'JS task complete' }));
//        .on('end', cb);
//});

gulp.task('browser-sync', function () {
    browserSync({
        proxy: "localhost:9000/"
    });
});

//gulp.task('clean', function (cb) {
//    del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
//});

//gulp.task('build', ['clean'], function () { //Dene kjøres først
//    gulp.start('scss', 'js');
//    //gulp.start('js'); //Disse kjører i paralell
//});

//gulp.task('default', ['build', 'browser-sync'], function () {
//    gulp.watch('src/**/*', ['build', reload]);

//});
