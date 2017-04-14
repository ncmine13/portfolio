var gulp = require('gulp');
var watch = require('gulp-watch');
var less = require('gulp-less');


gulp.task('compile-less', function(){
	gulp.src('./css/lessStyles/styles.less')
	//pipe(less()) below is less because it's our above variable
	.pipe(less())
	.pipe(gulp.dest('./css/lessStyles'))
})

gulp.task('watch', function(){
	//first argument is an array of files to watch
	//second arg is an array of tasks to run (what it's gonna do)
	//* is telling gulp to watch ever file in the folder with an extension of .less
	gulp.watch(['./css/lessStyles/styles.less'], ['compile-less'])
})

gulp.task('default', ['watch', 'compile-less'])
