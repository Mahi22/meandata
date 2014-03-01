var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var LogDetailsSchema = new Schema({
   Dealers: [{Dealar_Id:{type:Schema.Types.ObjectId,ref:'Dealer'}, Assistance_Id:{type:Schema.Types.ObjectId,ref:'Field_Assistance'}, TransactionDate:String, Description : String}],
    Farmers: [{Farmer_Id:{type:Schema.Types.ObjectId,ref:'Farmer'}, Assistance_Id:{type:Schema.Types.ObjectId,ref:'Field_Assistance'}, TransactionDate:String, Description : String,AdviceType:String}]
})

/**
 * Statics
 */
var LogDetails = mongoose.model('LogDetails', LogDetailsSchema);
LogDetails.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};