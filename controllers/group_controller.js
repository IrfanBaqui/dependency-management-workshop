module.exports = function(groupService) {

  var controller = {};

  controller.someFunction = function() {
    console.log('this is group controller');
    console.log('calling group serivce within group controller');
    groupService.someFunction();
  }

  return controller;

}