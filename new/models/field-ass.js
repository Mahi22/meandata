var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Field_AssistanceSchema = new Schema({
    _id:String,
    Email: String,
    Name: {type: String, required: true},
    Phone: String,
    ProfilePic: String,
    Dealers: [{Dealar_Id:{type:Schema.Types.ObjectId,ref:'Dealer'}, TransactionoDate:String, Description : String}],
    Farmers: [{Farmer_Id:{type:Schema.Types.ObjectId,ref:'Farmer'}, TransactionoDate:String, Description : String, AdviceType:String}]
});


/**
 * Statics
 */
var Field_Assistance = mongoose.model('Field_Assistance', Field_AssistanceSchema);

Field_AssistanceSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};