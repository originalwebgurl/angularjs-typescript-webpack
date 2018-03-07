# AngularJS + TypeScript + Laravel Mix( Webpack ) + ES6

Refresher on AngularJS for diving into an old app that needs some love after not being updated for a few years. This is my playground to try stuff out and get re-acquainted with 'The Angular Way' of doing stuff.

```
# build the files (dumps them in public dir)
npm run dev
```

## References

* [AngularJS 1.x TypeScript Style Guide](https://github.com/toddmotto/angularjs-styleguide/tree/master/typescript)
* [AngularJS 1.x Style Guide - John Papa](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
[Upgrading from AngularJS](https://angular.io/guide/upgrade)
* [TSLint](https://palantir.github.io/tslint/usage/cli/)
* [https://codepen.io/martinmcwhorter/post/angularjs-1-x-with-typescript-or-es6-best-practices]

## Workflow

YAY! [Laravel Mix](https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme) supports building TypeScript so no-brainer

* point mix to app.ts and dump it in public
* tslint gets picked up by WebStorm for handy warnings and error messages

## DOH!

* remember the weird case issues (ie: I can't import 'ProductsService' even though thta's the class name, it has to be 'productsService' when the reference is added to Angular.)
* I thought laravel-mix would include the typescript dep but I needed to install it ```npm install --save typescript```
* Got a bunch of these errors: 
```
[tsl] ERROR in /home/vagrant/code/Webble/AngularTypeScript/src/components/products/products.module.ts(1,8) 
TS1192: Module '"/home/vagrant/code/Webble/AngularTypeScript/node_modules/@types/angular/index"' has no default export.
```
solution was to add ```"esModuleInterop": false``` to tsconfig. It's a temporary solution that I found here: [https://github.com/Microsoft/TypeScript-React-Starter/issues/8]
* Got an error like this: **TypeError: Cannot read property 'afterCompile' of undefined** ts-loader was recently updated with webpack 4 support and dropped support for webpack 3 but the version laravel-mix automagically grabs during the first build is the most recent which breaks so downgrade it to 3.5 ```npm install --save-dev ts-loader@3.5``` see [https://github.com/JeffreyWay/laravel-mix/issues/1498]
* 
