var gulp = require('gulp'),
	concatCss = require('gulp-concat-css');

gulp.task('concat', function () {
  return gulp.src('./css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('./build/'));
});