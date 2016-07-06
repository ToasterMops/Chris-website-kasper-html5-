var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass'),
	connect = require('gulp-connect'),
	minifyCss = require('gulp-minify-css');

var jsSources = [
	"components/js/vendor/modernizr-2.6.2.min.js",
	"components/js/wow.min.js",
	"components/js/vendor/jquery-1.11.1.min.js",
	"components/js/parallax.min.js",
	"components/js/jquery.simple-text-rotator.js",
	"components/js/bootstrap.min.js",
	"components/js/jquery.nav.js",
	"components/js/jquery.mixitup.min.js",
	"components/js/jquery.fancybox.pack.js",
	"components/js/jquery.appear.js",
	"components/js/jquery-countTo.js",
	"components/js/owl.carousel.min.js",
	"components/js/main.js",
	];
var sassSources = ["components/sass/style.scss"];
var htmlSources = ["builds/*html"];

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(concat('main.js'))
		.pipe(gulp.dest('builds/js'))
		.pipe(connect.reload())
});
gulp.task('compass', function(){
	gulp.src(sassSources)
		.pipe(compass({
			sass: "components/sass",
			image: "builds/img",
			style: "nested",
		})
		.on('error', gutil.log))
		.pipe(minifyCss())
		.pipe(gulp.dest("builds/css"))
		.pipe(connect.reload())
});
gulp.task('watch', function(){
	gulp.watch(jsSources, ['js']);
	gulp.watch("components/sass/*.scss", ['compass']);
	gulp.watch(htmlSources, ['html']);
});
gulp.task('connect', function(){
	connect.server({
		root: "builds/",
		livereload: true
	});
});
gulp.task('html', function(){
	gulp.src(htmlSources)
		.pipe(connect.reload())
});

gulp.task('default', ['html','js','compass','connect','watch']);
