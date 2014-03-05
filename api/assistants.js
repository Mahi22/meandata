var assistants=[{'_id':'1','Name':'Gaurav Kumar Bhardwaj'},{'_id':'2','Name':'Lal Bahadur Sharma'},{'_id':'3','Name':'Ravi Kumar Sharma'},{'_id':'4','Name':'Kuldeep Sharma'},{'_id':'5','Name':'Subodh Kumar Tiwari'},{'_id':'5','Name':'Pankaj Sharma'},{'_id':'5','Name':'Sunil Kumar Sharma'}];


exports.all=function(req,res){
	// res.writeHead(200,{'Content-Type':'application/json'});
	console.log("Aaaya.......");
	console.log(assistants);
	res.json(assistants);
}