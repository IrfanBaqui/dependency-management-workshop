var domainObject4Controller = require('../controllers/domain_object_4_controller');

module.exports = function(app) {
  app.get('/domainObject4', domainObject4Controller.get);
  app.post('/domainObject4', domainObject4Controller.post);
};