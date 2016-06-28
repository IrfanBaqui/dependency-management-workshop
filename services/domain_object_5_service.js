var domainObjectHelper = require('../utils/domain_object_helper');

var svc = {};

svc.get = function(res, req) {
  domainObjectHelper.help();
  return res.json({"code": 200, "status": "OK"});
};

svc.post = function(res, req) {
  domainObjectHelper.help();
  return res.json({"code": 200, "status": "OK"});
};

module.exports = svc;