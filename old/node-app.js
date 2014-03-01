var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/ranadeydata');

app.use(express.bodyParser());
app.use(express.static('./app'));

// Bootstrap models
require('./models/data');
//Bootstrap routes
require('./routes/data')(app);

app.listen(9000);
console.log('Express server started on port 9000');
