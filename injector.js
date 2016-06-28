module.exports = function() {
  var container = require('dependable').container();
  container.register('userService', require('./services/user_service'));
  container.register('groupService', require('./services/group_service'));
  container.register('userController',require('./controllers/user_controller'));
  container.register('groupController',require('./controllers/group_controller'));
  container.register('groupHelper', require('./utils/group_helper'));
  container.register('userHelper',require('./utils/user_helper'));

  return container;
}
