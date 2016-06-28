var domainObject5Controller = require('../controllers/domain_object_5_controller');

module.exports = function(app) {
  app.get('/domainObject5', domainObject5Controller.get);
  app.post('/domainObject5', domainObject5Controller.post);
};