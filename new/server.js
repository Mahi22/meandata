var express = require('express'),
    app = express(),
    mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/ranadeydata1');

app.use(express.bodyParser());
app.use(express.static('./app'));

// Bootstrap models
 require('./models/farmer');
 require('./models/dealer');
 require('./models/field-ass');
 require('./models/log-details');
//Bootstrap routes
require('./routes/index')(app);


app.listen(4400);
console.log('Express server started on port 4400');

// var cp = require('child_process');
// var grunt = cp.spawn('grunt', ['--force', 'default', 'watch'])

// grunt.stdout.on('data', function(data) {
//     // relay output to console
//     console.log("%s", data)
// });