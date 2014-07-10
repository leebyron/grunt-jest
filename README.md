# grunt-jest v0.1.0

Grunt task to run tests with [Jest](http://facebook.github.io/jest/).



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jest');
```



## Run tests
_Run this task with the `grunt jest` command._

Task options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.
### Options

#### config
Type: `String` srcpath

The path to a jest config file specifying how to find and execute tests.

#### testPathPattern
Type: `RegExp`
Default: `/.*/`

Only tests which match this pattern will execute.

#### coverage
Type: `Boolean`
Default: `false`

Indicates that test coverage information should be collected and reported in the output.

#### maxWorkers
Type: `Number`
Default: Number of cores available on this machine.

Specifies the maximum number of workers the worker-pool will spawn for running tests.
(it is usually best not to override this default)

#### onlyChanged
Type: `Boolean`
Default: `false`

Attempts to identify which tests to run based on which files have changed in
the current repository. Only works if you're running tests in a git repository at the moment.

#### runInBand
Type: `Boolean`
Default: `false`

Run all tests serially in the current process (rather than creating a worker pool of child
processes that run tests). This is sometimes useful for debugging, but such use cases are pretty rare.



### Usage Examples

```js
jest: {
  options: {
    coverage: true,
    testPathPattern: /.*-test.js/
  }
}
```
