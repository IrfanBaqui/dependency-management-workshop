var domainObject3Service = require('../services/domain_object_3_service');

var ctl = {};

ctl.get = function(res, req) {
  domainObject3Service.get(req, res);
};

ctl.post = function(res, req) {
  domainObject3Service.post(req, res);
};

module.exports = ctl;