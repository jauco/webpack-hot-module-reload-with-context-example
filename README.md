HMR is kinda finicky, and require.context is finicky as well. When debugging HMR/require.context code that doesn't work I usually start with a known working version and then turn that code step by step into the code that isn't working and then watch when it fails. Here's a working version for those of you that want to do the same thing, or just want to play around.

This is what should work: run `npm install` and then `npm start`. Open [http://localhost:8080/bundle](http://localhost:8080/bundle) in your browser. Open the console. Now edit or add files in the filesToLoad directory.

If you want to create a module that does the hot reloading and that your code can then subscribe to check out the [allow_import_of_hmr_module branch](https://github.com/jauco/webpack-hot-module-reload-with-context-example/tree/allow_import_of_hmr_module) it's a bit more complex, but arguably a better starting point for actual code.
