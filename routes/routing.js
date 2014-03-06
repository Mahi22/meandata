var async = require('async');

module.exports = function(app) {
    //Client Routes
    var farmers = require('../api/farmer');
    var others=require('../api/others');
    app.get('/farmers', farmers.all);
    app.post('/farmers', farmers.create);
    app.get('/farmers/:farmerId', farmers.show);
    app.put('/farmers/:farmerId', farmers.update);
    app.post('/upload/:name', farmers.upload);
    app.get('/assistants',others.allAssistants);
    app.get('/products',others.allProducts);
    app.get('/worktypes',others.allWorkType);
//    app.del('/clients/:clientId', clients.destroy);

    //Finish with setting up the clientId param
    app.param('farmerId', farmers.client);
};