const gulp = require('gulp');
const javascriptObfuscator = require('gulp-javascript-obfuscator');

function defaultTask() {
	return gulp
		.src("./app/assets/js/renderer.js")
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

exports.default = defaultTask;
