/*
	including all require modules ........
*/

var mongoose=require('mongoose');
var mongodb=require('mongodb');
var Field_Assistance=mongoose.model('Field_Assistance');

//get all documents from farmers collections.......
exports.getAll=function(req,res){
	console.log("Diwakar");
	res.writeHead(200,{'Content-Type':'application/json'});
	Field_Assistance.find().select('_id Name').exec(function(err,Field_Assistances){
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log(Field_Assistances);
			res.end(JSON.stringify(Field_Assistances));
		}
	});
}


//insert a document in farmers collection
exports.insert=function(req,res){
	var newField_Assistances=new Field_Assistances(req.body);
	newField_Assistances.save(function(err){
		if(err){
			console.log("not Fine......");
		}
		else
		{
			console.log("fine......");
		}
	});
}
