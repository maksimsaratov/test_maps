var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch('./src/www/assets/less/*.less', ['compile-style']);
    gulp.watch('./src/www/app/**/*.js', ['compile-js']);
    gulp.watch('./src/www/*.html', ['copy-html']);
});
