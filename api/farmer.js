/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Farmer = mongoose.model('Farmer'),
    mongodb=require('mongodb'),
    _ = require('underscore');


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