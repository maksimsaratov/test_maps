var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('compile-style', function() {
    return gulp.src(['./src/www/assets/less/*.less'])
        .pipe(less())
        .pipe(cssmin({
            rebase: false,
            keepBreaks: true,
            aggressiveMerging: false
        }))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});
