When using `postcss-color-mod-function` and a `browserslist` config, it seems to be a little too generous and assumes support in browsers that don't actually support this feature.

In this repo, you'll find 2 simple css files, and 2 build scripts with gulp to replicate the issue. The expected result of both tests is to complete successfully,  and  build a file with the following contents:
```css
body {
	background-color: rgba(0, 0, 0, 0.2);
	background-color: color-mod(var(--black) alpha(20%));
	border: hsl(120, 100%, 40%);
	border: color-mod(var(--green) lightness(40%));;
}
```

## npm run build-colorMod

Works perfectly, uses default `browserslist` and resolves everything appropriately.

## npm run build-withVariablesConfig

Runs succesfully, but never resolves the `color-mod` function declarations, even though this isn't supported in the latest chrome versions. Outputs:
```css
body {
	background-color: color-mod(var(--black) alpha(20%));
	border: color-mod(var(--green) lightness(40%));;
}
```
