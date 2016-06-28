var domainObject2Controller = require('../controllers/domain_object_2_controller');

module.exports = function(app) {
  app.get('/domainObject2', domainObject2Controller.get);
  app.post('/domainObject2', domainObject2Controller.post);
};