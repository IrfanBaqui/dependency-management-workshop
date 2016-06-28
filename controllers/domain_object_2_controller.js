var domainObject2Service = require('../services/domain_object_2_service');

var ctl = {};

ctl.get = function(res, req) {
  domainObject2Service.get(req, res);
};

ctl.post = function(res, req) {
  domainObject2Service.post(req, res);
};

module.exports = ctl;