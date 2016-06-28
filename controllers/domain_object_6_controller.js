var domainObject6Service = require('../services/domain_object_6_service');

var ctl = {};

ctl.get = function(res, req) {
  domainObject6Service.get(req, res);
};

ctl.post = function(res, req) {
  domainObject6Service.post(req, res);
};

module.exports = ctl;