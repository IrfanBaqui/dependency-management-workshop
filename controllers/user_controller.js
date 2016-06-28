module.exports = function(userService) {

  var controller = {};

  controller.someFunction = function() {
    console.log('this is user controller');
    console.log('calling user serivce within user controller');
    userService.someFunction();
  }

  return controller;

}