define(function(){

  var x = 0;

  function doStuff(){
    return ++x;
  }

  return { doStuff: doStuff };

});
