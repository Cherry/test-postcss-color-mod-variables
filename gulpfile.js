const gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	postcssPresetEnv = require('postcss-preset-env');

gulp.task('colorModBrowsers', () => gulp.src('./src/test-withBrowsers.css').pipe(
	postcss([
		postcssPresetEnv({
			browsers: 'last 3 chrome versions',
			stage: 0,
			features: {
				'color-mod-function': {
					unresolved: 'ignore'
				},
				'custom-properties': {
					variables: {
						black: '#000000',
						green: '#00ff00'
					},
					noValueNotifications: "error"
				}
			}
		})
	])
).pipe(
	gulp.dest('./dist/')
));

gulp.task('colorMod', () => gulp.src('./src/test.css').pipe(
	postcss([
		postcssPresetEnv({
			stage: 0,
			features: {
				'color-mod-function': {
					unresolved: 'ignore'
				},
				'custom-properties': {
					variables: {
						black: '#000000',
						green: '#00ff00'
					},
					noValueNotifications: "error"
				}
			}
		})
	])
).pipe(
	gulp.dest('./dist/')
));