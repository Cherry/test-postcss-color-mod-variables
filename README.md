When using postcss-preset-env, and specifically the `postcss-color-mod-function` and `postcss-custom-properties` plugins together, an unexpected result happens when using the `variables` configuration option from `postcss-custom-properties`.

In this repo, you'll find 2 simple css files, and 2 build scripts with gulp to replicate the issue. The expected result of both tests is to complete successfully, with the `color-mod` function executing without error.

## npm run build-withRoot

This is the test that works fine, and the more simple scenario. The https://github.com/Cherry/test-postcss-color-mod-variables/blob/master/src/test-withRoot.css file defines a `:root`  block with a variable `--black`, and then we use that variable in a `color-mod` function directly underneath. This works fine.

## npm run build-withVariablesConfig

This example does not work with `color-mod`, but other uses of the variable work fine. This method of defining variables in the `variables` configuration option is very useful for larger projects with a lot of variables, or thousands of css files that don't wish to import the variables every single time.

If you run this script, you'll receive an error akin to `test-withVariablesConfig.css:2:30: Expected a color`.

-----
We're transitioning from `postcss-cssnext` and it's been extremely smooth up to this point, as this used to work fine in the past. I'd imagine it's a simple load order thing, but I couldn't quite find the issue at a quick glance.

Let me know if I can provide any further information to help here.
