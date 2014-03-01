var async = require('async');

module.exports = function(app) {
    //Client Routes
    var clients = require('../api/data');
//    app.get('/clients', clients.all);
    app.post('/farmers', clients.create);
    app.get('/farmers/:clientId', clients.show);
    app.put('/farmers/:clientId', clients.update);
//    app.del('/clients/:clientId', clients.destroy);

    //Finish with setting up the clientId param
    app.param('clientId', clients.client);
};