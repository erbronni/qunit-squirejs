require.config({
  paths: {
    jquery: '../components/jquery/dist/jquery',
    bootstrap: '../components/bootstrap-sass/assets/javascripts/bootstrap'
  },
  shim: {
    bootstrap: ['jquery']
  }
});
require([
  'jquery',
  'foo',
  'bootstrap'
], function ($, foo) {

  console.log('First foo: ' + foo.doStuff());
  console.log('Second foo: ' + foo.doStuff());

});
