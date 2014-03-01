var async = require('async');

module.exports = function(app) {
    //Client Routes
    //var clients = require('../api/main');
    var farmer=require('../api/farmer');
    var field_assistance=require('../api/field_assistance');

    //Post Methods 
    // app.post('/insertFarmerData',clients.insertFarmer);
    // app.post('/insertAssistanceData',clients.insertAssistance);
    // app.post('/insertDealerData',clients.insertDealer);
    // app.post('/insertAssVisitData',clients.insertAssVisit);

    // app.post('/getAssistantInfo',clients.getAssistantInfo);

    // //Get Methods
    // app.get('/accessAssistNames',clients.accessAssistNames);
    // app.get('/accessFarmerNames',clients.accessFarmerNames);
    // app.get('/accessDealerNames',clients.accessDealerNames);
    // app.get('/getFarmers/:loc/:name',clients.getFarmers);
    app.get('/field_assistance',field_assistance.getAll);

    app.get('/farmers/:id',farmer.getAll);
    app.get('/farmer/:Village/:Name',farmer.getFarmers);


    app.post('/farmers',farmer.insert);

    app.params()
};