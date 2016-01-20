QUnit/RequireJS/SquireJS Example
================================

This is a mininal example on using Require.js and Squire.js with QUnit.  It is not
intended to be an exhaustive example nor shold this project be used as an 
example of how to configure a project.  The bare minimum was done to get the
tests working and validate the an answer for the answer to
[Reset module in unit tests](http://stackoverflow.com/questions/34888574/reset-module-in-unit-tests/34891840) 
on [Stackoverflow](http://stackoverflow.com/).


Building the Project
-------------------
The basic project build commands are:

  npm install
  bower install
  grunt 
  
The application page is ```app/index.html```, and the QUnit test page is 
```test/index.html```.  Both pages can be run directly from their location. All
file references are relative.


Squire.js
---------
The [Squire.js](https://github.com/iammerrick/Squire.js/) package is designed 
for injecting mock dependencies in [Require.js](http://www.requirejs.org). There
is a added side effect that the modules are loaded in an isolated context, so 
that modifications to a module's state in one Squire.js context will not affect
the module's state in a separate Squire.js context. 

Example
-------
Below is a module that increments a counter and returns the value.


```javascript
// foo.js
define(function(){

  var x = 0;

  function doStuff(){
    return ++x;
  }

  return { doStuff: doStuff };

});
```

In order to reset the state of the foo module, the JavaScript file needs to be
reloaded.  This is where Squire.js comes into play.  By using the Squire.js 
injector, the foo.js file will be reloaded into the context, and the state of 
the foo module will start from scratch.

In the test script below, it shows that the foo module tested inside the 
```injector.require()``` context is not affected by the foo module calls in
the main context.  And calls to the foo module inside the ```injector.require()```
context are not affected by other calls made inside separate ```injector.require()```
contexts.

```javascript
// testFoo.js
define(['Squire', 'foo'], function (Squire, foo) {

  'use strict';

  QUnit.start();

  QUnit.module('foo', {
    setup: function () {

    },
    teardown: function () {

    }
  });

  QUnit.test('Testing foo counter in main context.', 2, function (assert) {
    assert.equal(foo.doStuff(), 1); // this will work
    assert.equal(foo.doStuff(), 2); // this should work also.
  });

  QUnit.test('Testing foo counter in context created by Squire.', 1, function (assert) {
    var done = assert.async(),
      injector = new Squire();

    injector.require([
      'foo'
    ], function (foo) {
      assert.equal(foo.doStuff(), 1); // this will work.
      done();
    });
  });

  QUnit.test('Second test foo counter in context created by Squire.', 2, function (assert) {
    var done = assert.async(),
      injector = new Squire();

    injector.require([
      'foo'
    ], function (foo) {
      assert.equal(foo.doStuff(), 1); // this will work.
      assert.equal(foo.doStuff(), 2); // this will work.
      done();
    });
  });

  QUnit.test('Testing foo counter in main context, should be 3.', 1, function (assert) {
    assert.equal(foo.doStuff(), 3); // this should work.
  });

});
```




  
