var domainObject4Service = require('../services/domain_object_4_service');

var ctl = {};

ctl.get = function(res, req) {
  domainObject4Service.get(req, res);
};

ctl.post = function(res, req) {
  domainObject4Service.post(req, res);
};

module.exports = ctl;