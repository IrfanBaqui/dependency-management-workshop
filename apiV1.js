var app = require('express')();

require('./routes/domain_object_1')(app);
require('./routes/domain_object_2')(app);
require('./routes/domain_object_3')(app);
require('./routes/domain_object_4')(app);
require('./routes/domain_object_5')(app);
require('./routes/domain_object_6')(app);

module.exports = app;