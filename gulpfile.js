const gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	postcssPresetEnv = require('postcss-preset-env');

gulp.task('withVariablesConfig', () => gulp.src('./src/test-withVariablesConfig.css').pipe(
	postcss([
		postcssPresetEnv({
			variables: {
				black: '#000000'
			}
		})
	])
).pipe(
	gulp.dest('./dist/')
));

gulp.task('withRoot', () => gulp.src('./src/test-withRoot.css').pipe(
	postcss([
		postcssPresetEnv({
			variables: {
				black: '#000000'
			}
		})
	])
).pipe(
	gulp.dest('./dist/')
));