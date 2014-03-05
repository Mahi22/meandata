/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Farmer = mongoose.model('Farmer'),
    mongodb=require('mongodb'),
    _ = require('underscore'),
    fs = require('fs'),
    mkdirp = require('mkdirp');


/**
 * Find client by id
 */
exports.client = function(req, res, next, id) {
    Farmer.load(id, function(err, client) {
        console.log("Calling load function" + client);
        if (err) return next(err);
        if (!client) return next(new Error('Failed to load client ' + id));
        req.client = client;
        console.log("req.Client " + req.client);
        next();
    });
};


/**
 * Create a client
 */
exports.create = function(req, res) {
    var client = new Farmer(req.body);
    console.log("called all function");

    client.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                client: client
            });
        } else {
            res.jsonp(client);
        }
    });
};

/**
 * Update a client
 */
exports.update = function(req, res) {
    var client = req.client;
    console.log("Calling from update function " + client);

    client = _.extend(client, req.body);
    console.log("Calling from update function1 " + client);
    client.save(function(err) {
        res.jsonp(client);
    });
};

exports.upload = function(req, res) {
    var file = req.files.file;
    var farmername = req.params.name;

        var newpath = uploadPicture(file, farmername);
        res.jsonp({"imgpath": newpath});
    
}

function uploadPicture(file, name) {
    var pic = file;
    //create dir with name farmername and village
    var dirPath = "/uploads/"+name;
    mkdirp(__dirname + dirPath, function (err) {
        if (err) console.error(err);
    });
    

    var newPath = dirPath +"/" +(Math.floor(Math.random()*10000));
    fs.readFile(pic.path, function (err, data) {
        var path = __dirname + newPath;
      fs.writeFile(path, data, function (err) {
        console.log(err);
      });

    });
    return newPath;
}

/**
 * Delete an client
 */
exports.destroy = function(req, res) {
    var client = req.client;

    client.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(client);
        }
    });
};

/**
 * Show an client
 */
exports.show = function(req, res) {
    res.jsonp(req.client);
};

/**
 * List of Clients
 */
exports.all = function(req, res) {
    console.log("called all function");
    Farmer.find().exec(function(err, clients) {
        if (err) {
            res.send('error', {
                status: 500
            });
        } else {
            res.jsonp(clients);
        }
    });
};