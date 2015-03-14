# Website Template

This is a basic website template for starting new websites with the following things pre-included:

 * A node.js express server
 * Bootstrap and its theme
 * Some useful libraries with bower
 * A Gruntfile that does:
    * JSHint verification of your javascript code
    * sass compilation, and the bourbon library
    * live page reload when changing stuff

## Usage

You need a few things installed on your dev computer in order to develop:

* [`node.js`](http://nodejs.org/) obviously
* [`sass`](http://sass-lang.com/) which is used to compile SCSS to CSS (and to use the [`bourbon`](http://bourbon.io/) library)
* [`grunt-cli`](https://www.npmjs.org/package/grunt-cli) on your dev computer for running grunt
* [`bower`](http://bower.io/) for downloading client-side libraries

Then, just run

```shell
bower install
npm install
grunt watch
```

Modify your scss file so that grunt can compile it to css

You can modify `config.json` with whatever values you'd like, and with the [`nconf`](https://github.com/flatiron/nconf) module read them in your server

Then you can launch the node server

`node app.js`

And the rest is up to you.
