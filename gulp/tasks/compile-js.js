var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('compile-js', function() {
    return gulp.src(['./src/www/app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});
