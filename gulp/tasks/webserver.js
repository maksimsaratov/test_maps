var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        root: './dist/',
        port: 8010,
        livereload: true
    });
});
