module.exports = function(userHelper) {
  var service = {};

  service.someFunction = function() {
    console.log('this is user service');
    console.log('calling user helper within user service');
    userHelper.someFunction()
  }

  return service;

}