var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DealerSchema = new Schema({
    Name: {type: String, required: true},
    Shop_Name: String,
    Address: String,
    Phone: String,
    Location: String,
    Profile_Pic: String,
    Assistance_Id : {type: Schema.Types.ObjectId, required: true, ref:'Field_assistance'},
    Dealer_Type: {type: Number, required: false},
    Main_Dealer_Id: {type:Schema.Types.ObjectId,ref:'Dealer'},
    Description: String
});

/**
 * Statics
 */
DealerSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

var Dealer = mongoose.model('Dealer', DealerSchema);