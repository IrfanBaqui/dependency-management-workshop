var container = require('./injector.js')();

container.resolve(function(userController, groupController) {
  console.log('in main');
  console.log('in main, calling user controller');
  userController.someFunction();
  console.log('in main, calling group controller');
  groupController.someFunction();
});