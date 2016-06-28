var domainObject1Service = require('../services/domain_object_1_service');

var ctl = {};

ctl.get = function(res, req) {
  domainObject1Service.get(req, res);
};

ctl.post = function(res, req) {
  domainObject1Service.post(req, res);
};

module.exports = ctl;