var domainObject6Controller = require('../controllers/domain_object_6_controller');

module.exports = function(app) {
  app.get('/domainObject6', domainObject6Controller.get);
  app.post('/domainObject6', domainObject6Controller.post);
};