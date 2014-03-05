var Assistants=[{'_id':'1','Name':'Gaurav Kumar Bhardwaj'},{'_id':'2','Name':'Lal Bahadur Sharma'},{'_id':'3','Name':'Ravi Kumar Sharma'},{'_id':'4','Name':'Kuldeep Sharma'},{'_id':'5','Name':'Subodh Kumar Tiwari'},{'_id':'6','Name':'Pankaj Sharma'},{'_id':'7','Name':'Sunil Kumar Sharma'}];


exports.allAssistants=function(req,res){
	res.json(Assistants);
}

var Products=[{'_id':'1','Name':'Micnics'},{'_id':'2','Name':'Sassori'},{'_id':'3','Name':'Boracol BSF -11'},{'_id':'4','Name':'Boracol BSF -12'},{'_id':'5','Name':'Boracol-BNG'},{'_id':'6','Name':'Boracol-Ginger'},{'_id':'7','Name':'Boracol-Permite'},{'_id':'8','Name':'Boracol-RFC'},{'_id':'9','Name':'Kiecite-RFC'},{'_id':'10','Name':'Kiecite- G 5 lit'},{'_id':'11','Name':'Kiecite- G'},{'_id':'12','Name':'Kiecite DF - BNJ'},{'_id':'13','Name':'Kiecite DF - CTR'},{'_id':'14','Name':'Kiecite DF - FRV'},{'_id':'15','Name':'Kiecite DF - GRP'},{'_id':'16','Name':'Kiecite DF - PMG'},{'_id':'17','Name':'Miczink'},{'_id':'18','Name':'Micmoll - C'},{'_id':'19','Name':'Micmoll - G'},{'_id':'20','Name':'Micmoll - V'},{'_id':'21','Name':'Micnelf MS - 16'},{'_id':'22','Name':'Micnelf MS - 24'},{'_id':'23','Name':'Micnelf MS - 32'}];

exports.allProducts=function(req,res){
	res.json(Products);
}

var WorkTypes=[{'_id':'1','Name':'New'},{'_id':'2','Name':'Advice'},{'_id':'3','Name':'Sale'},{'_id':'4','Name':'Follow Up'}];

exports.allWorkType=function(req,res){
	res.json(WorkTypes);
}