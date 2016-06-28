var domainObject1Controller = require('../controllers/domain_object_1_controller');

module.exports = function(app) {
  app.get('/domainObject1', domainObject1Controller.get);
  app.post('/domainObject1', domainObject1Controller.post);
};