var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://192.168.0.100/test');

app.use(express.bodyParser());
app.use(express.static('./app'));

// Bootstrap models
require('./models/farmer');
//Bootstrap routes
require('./routes/routing')(app);

app.listen(9000);
console.log('Express server started on port 9000');
