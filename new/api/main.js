var mongoose=require('mongoose');
var mongodb=require('mongodb');
var Farmer=mongoose.model('Farmer');
var Field_assistance=mongoose.model('Field_Assistance');
var LogDetails=mongoose.model('LogDetails');
var Dealer=mongoose.model('Dealer');
var appfunc=require('./appFunctions');


exports.insertFarmer=function(req,res)
{
	var path="C:/Users/Samphal/Desktop/project/public/images/farmer/profile/";
 //    var date=new Date().getTime();
 //    var imageName=date+appfunc.getExtension(req.files.profilePic.name);
	// appfunc.writeToServer(path,imageName,req.files.fProfilePic.path);
	// var path="C:/Users/Samphal/Desktop/project/public/images/farmer/field/";
	// appfunc.writeToServer(path,date,req.files.fFieldPic.path);
	// var imageName1="dsf";//date+appfunc.getExtension(req.files.fieldPic.name);
	var crop={'Crop_Type':req.body.crop,'Crop_Sowing_Date':req.body.crop_Sowing_Date,'Land':req.body.land};
	var timeLineData={'Assistance_Id':req.body.assistantId,'Work_Type':'1','Description':req.body.description,'Field_Image':'imageName1','T_date':appfunc.extractDate(0)};
	var farmerObj={'Name':req.body.name,'Address':req.body.address,'Village':req.body.village,'Phone':req.body.phone,'Location':req.body.location,'ProfilePic':'imageName','TimeLine':[timeLineData],'Crop':[crop]};
	
	var farmer=new Farmer(farmerObj);
	console.log(farmerObj);
	farmer.save(function(err){
		if(err){
			console.log("not Fine......");
			res.send("notFine");
		}
		else
		{
			updateAssistTimeLine(farmer.TimeLine[0].Assistance_Id,"Farmer_Id",farmer._id);
			insertLogDetails(farmer._id,farmer.Assistance_Id,"1");
			console.log("fine......");
			res.send("fine");
		}
	});
}

exports.getFarmers=function(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    Farmer.find({Name:req.params.name,Location:req.params.loc},function(err,farmers){
        res.end(JSON.stringify(farmers));
    });
}

exports.insertAssistance=function(req,res){
	// console.log(req.body);
	var assistance=new Field_assistance(req.body);
	assistance.save(function(err){
		if(err){
			console.log("not Fine......");
		}
		else
		{
			console.log("fine......");
		}
	});
}

exports.insertAssVisit=function(req,res){
	console.log(req.body);
	updateFarmerTimeLine(req.body.Farmer_Id,req.body.Ass_Id,req.body.Visit_Type,req.body.Description,req.body.Field_Image);
}

function updateFarmerTimeLine(Farmer_Id,Assistance_Id,Work_Type,Description,Field_Image)
{
	Farmer.findOne({_id:new mongodb.ObjectID(Farmer_Id)},function(err,farmer){
		farmer.TimeLine.push({'Assistance_Id':Assistance_Id,'Work_Type':Work_Type,'Description':Description,'Field_Image':Field_Image,'T_date':appfunc.extractDate(0)});
		farmer.save(function(err){

		});
	});
}

exports.insertDealer=function(req,res){
	console.log(req.body);
	var dealer=new Dealer(req.body);
	dealer.save(function(err){
		if(err){
			console.log("not Fine......");
		}
		else
		{
			updateAssistTimeLine(dealer.Ass_Id,"Dealer_Id",dealer._id);
			// console.log(dealer._id);
			console.log("fine11......");
		}
	});
}

function insertLogDetails(Farmer_Id,Assistance_Id,VisitType){
	var logDetails=new LogDetails({'Farmer_Id':Farmer_Id,'Assistance_Id':Assistance_Id,'VisitType':VisitType,LogDate:appfunc.extractDate(0)});
	logDetails.save(function(err){

	});
}

function updateAssistTimeLine(Ass_ID,fieldName,ID)
{
	console.log(Ass_ID);
	Field_assistance.findOne({_id:new mongodb.ObjectID(Ass_ID)},function(err,field_assist){
		if(fieldName=="Dealer_Id")
			field_assist.TimeLine.push({"Dealer_Id":ID});
		else
			field_assist.TimeLine.push({"Farmer_Id":ID});
		field_assist.save(function(err){

		});
	});
}

exports.accessAssistNames=function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	Field_assistance.find(function(err,assists){
		res.end(JSON.stringify(assists));
	});
}

exports.accessFarmerNames=function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	Farmer.find(function(err,farmers){
		res.end(JSON.stringify(farmers));
	});
}

exports.accessDealerNames=function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	Dealer.find({Dealer_Type:'0'},{Name:1},function(err,dealers){
		res.end(JSON.stringify(dealers));
	});
}

exports.getAssistantInfo=function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	Field_assistance.findOne({_id:new mongodb.ObjectID(req.Ass_Id)},function(err,assist){
		res.end(JSON.stringify(assist));
	});
}