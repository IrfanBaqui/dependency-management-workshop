module.exports = function(groupHelper) {
  var service = {};

  service.someFunction = function() {
    console.log('this is group service');
    console.log('calling group helper within group service');
    groupHelper.someFunction()
  }

  return service;

}