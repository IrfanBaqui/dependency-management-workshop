var domainObject3Controller = require('../controllers/domain_object_3_controller');

module.exports = function(app) {
  app.get('/domainObject3', domainObject3Controller.get);
  app.post('/domainObject3', domainObject3Controller.post);
};