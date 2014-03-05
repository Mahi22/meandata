var async = require('async');

module.exports = function(app) {
    //Client Routes
    var farmers = require('../api/farmer');
    var assistants=require('../api/assistants');
    app.get('/farmers', farmers.all);
    app.post('/farmers', farmers.create);
    app.get('/farmers/:farmerId', farmers.show);
    app.put('/farmers/:farmerId', farmers.update);

    app.get('/assistants',assistants.all);
//    app.del('/clients/:clientId', clients.destroy);

    //Finish with setting up the clientId param
    app.param('farmerId', farmers.client);
};