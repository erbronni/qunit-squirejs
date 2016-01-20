require.config({
  paths: {
    jquery: '../app/components/jquery/dist/jquery',
    bootstrap: '../app/components/bootstrap-sass/assets/javascripts/bootstrap',
    'Squire':  '../app/components/Squire.js/src/Squire',
    qunit: '../app/components/qunit/qunit/qunit',
    foo: '../app/scripts/foo'
  },
  shim: {
    bootstrap: ['jquery']
  }
});
require([
  'qunit',
  'fooTest'
], function () {

});
