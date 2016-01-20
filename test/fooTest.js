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
