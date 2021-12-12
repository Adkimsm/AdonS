const gulp = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

function defaultTask() {
	return gulp
		.src("./app/assets/js/*.js")
		.pipe(
			javascriptObfuscator({
				compact: true,
				controlFlowFlattening: true,
				controlFlowFlatteningThreshold: 1,
				numbersToExpressions: true,
				simplify: true,
				shuffleStringArray: true,
				splitStrings: true,
				stringArrayThreshold: 1,
			})
		)
		.pipe(gulp.dest("./app/assets/js/"));
}

function minCss() {
	return gulp.src('./app/assets/css/*.css')
		.pipe(cleanCSS({ debug: true }, (details) => {
			console.log(`${details.name}: ${details.stats.originalSize}`);
			console.log(`${details.name}: ${details.stats.minifiedSize}`);
		}))
		.pipe(gulp.dest('./app/assets/css/'));
}

exports.obfuscatorJs = defaultTask;
exports.minCss = minCss;
