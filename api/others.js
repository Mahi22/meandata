var fs=require('fs');
var Assistants=[{'_id':'1','Name':'Gaurav Kumar Bhardwaj'},{'_id':'2','Name':'Lal Bahadur Sharma'},{'_id':'3','Name':'Ravi Kumar Sharma'},{'_id':'4','Name':'Kuldeep Sharma'},{'_id':'5','Name':'Subodh Kumar Tiwari'},{'_id':'6','Name':'Pankaj Sharma'},{'_id':'7','Name':'Sunil Kumar Sharma'}];


exports.allAssistants=function(req,res){
	res.json(Assistants);
}

var Products=[];

exports.allProducts=function(req,res){
	var arrayOfThings = fs.readFileSync("C:\\Users\\Samphal\\Desktop\\first.txt", "utf8").trim().split(/[\r\n]+/g);
		for(var i=0;i<arrayOfThings.length;i++)
		{
			Product={'_id':i+1,'Name':arrayOfThings[i]};
			Products.push(Product);
		}
	res.json(Products);
}

var WorkTypes=[{'_id':'1','Name':'New'},{'_id':'2','Name':'Advice'},{'_id':'3','Name':'Sale'},{'_id':'4','Name':'Follow Up'}];

exports.allWorkType=function(req,res){
	res.json(WorkTypes);
}

exports.searchById=function(req,res)
{
	res.writeHead(200,{'Content-Type':'text/plain'});
	var id=req.params.assId;
	for(var i=0;i<Assistants.length;i++)
	{
		if(Assistants[i]._id==id)
		{
			res.end(Assistants[i].Name);
			return;
		}
	}
}