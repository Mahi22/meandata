/*
	including all require modules ........
*/

var mongoose=require('mongoose');
var mongodb=require('mongodb');
var Farmer=mongoose.model('Farmer');

//get all documents from farmers collections.......
exports.getAll=function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	Farmer.find(function(err,farmers){
		if(err)
		{
			console.log(err);
		}
		else
		{
			res.end(JSON.stringify(farmers));
		}
	})
}


//insert a document in farmers collection
exports.insert=function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	var newfarmer=new Farmer(req.body);
	newfarmer.save(function(err){
		if(err){
			console.log(err);
		}
		else
		{
			console.log("fine......");
			res.end(newfarmer._id+'');
		}
	});
}

//Search all farmer based on Location and Name in farmers collection..........
exports.getFarmers=function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    console.log(req.params.Village+" "+req.params.Name);
    Farmer.find({Name:req.params.Name,Village:req.params.Village},function(err,farmers){
        res.end(JSON.stringify(farmers));
    });
}