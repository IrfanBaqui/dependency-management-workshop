var domainObject5Service = require('../services/domain_object_5_service');

var ctl = {};

ctl.get = function(res, req) {
  domainObject5Service.get(req, res);
};

ctl.post = function(res, req) {
  domainObject5Service.post(req, res);
};

module.exports = ctl;