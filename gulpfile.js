var gulp = require('gulp'),
	gutil = require('gulp-util'),
	concat = require('gulp-concat'),
	compass = require('gulp-compass'),
	sass = require('gulp-sass'),
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
var jsCjdesign = [
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
	"components/js/cjdesign.js",
	];

var jsBlog = [
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
	"components/js/blog.js",
	];

var sassSources = ["components/sass/style.scss"];
var sassCjdesign = ["components/sass/cjdesign-style.scss"];
var sassBlog = ["components/sass/pokeblog-style.scss"];

var htmlSources = ["builds/*html"];
var htmlCjdesign = ["builds/CJ-Design/*html"];
var htmlBlog = ["builds/pokecalc-blog/*html"];

gulp.task('js', ['js:main', 'js:cjdesign', 'js:blog']);
gulp.task('js:main', function(){
	gulp.src(jsSources)
		.pipe(concat('main.js'))
		.pipe(gulp.dest('builds/js'))
		.pipe(connect.reload())
});
gulp.task('js:cjdesign', function(){
	gulp.src(jsCjdesign)
		.pipe(concat('main.js'))
		.pipe(gulp.dest('builds/CJ-Design/js'))
		.pipe(connect.reload())
});
gulp.task('js:blog', function(){
	gulp.src(jsBlog)
		.pipe(concat('main.js'))
		.pipe(gulp.dest('builds/pokecalc-blog/js'))
		.pipe(connect.reload())
});

gulp.task('sass', ['sass:main', 'sass:cjdesign', 'sass:blog']);
gulp.task('sass:main', function () {
	gulp.src(sassSources)
	    .pipe(sass({
	    	outputStyle: 'compressed',
	    })
	    .on('error', sass.logError))
	    .pipe(gulp.dest('builds/css'))
	    .pipe(connect.reload())
});
gulp.task('sass:cjdesign', function () {
	gulp.src(sassCjdesign)
	    .pipe(sass({
	    	outputStyle: 'compressed',
	    })
	    .on('error', sass.logError))
	    .pipe(gulp.dest('builds/CJ-Design/css'))
	    .pipe(connect.reload())

});
gulp.task('sass:blog', function () {
	gulp.src(sassBlog)
	    .pipe(sass({
	    	outputStyle: 'compressed',
	    })
	    .on('error', sass.logError))
	    .pipe(gulp.dest('builds/pokecalc-blog/css'))
	    .pipe(connect.reload())

});

gulp.task('html', function(){
	gulp.src(htmlSources)
		.pipe(connect.reload())

	gulp.src(htmlCjdesign)
		.pipe(connect.reload())

	gulp.src(htmlBlog)
		.pipe(connect.reload())
});

gulp.task('watch', function(){
	gulp.watch(jsSources, ['js:main']);
	gulp.watch(jsCjdesign, ['js:cjdesign']);
	gulp.watch(jsBlog, ['js:blog']);
	gulp.watch("components/sass/*.scss", ['sass']);
	gulp.watch(htmlSources, ['html']);
	gulp.watch(htmlCjdesign, ['html']);
	gulp.watch(htmlBlog, ['html']);
});

gulp.task('connect', function(){
	connect.server({
		root: "builds/",
		livereload: true
	});
});

gulp.task('build', ['html','js','sass']);

gulp.task('default', ['build','connect','watch']);
