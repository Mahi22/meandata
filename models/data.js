var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var FarmerSchema = new Schema({
    Name: {type: String, required: true},
    Village: String,
    Phone: String,
    Location: String,
    Profile_Pic: String,
    TimeLine: [{
        Assistance_Id : String,
        Work_Type: String,
        Description: String,
        Field_Image: String,
        Transaction_Date: String,
        Product: String
    }],
    Crop: [{
        Crop_Type: String,
        Crop_Sowing_Date: String,
        Land: String
    }]
});

/**
 * Statics
 */
FarmerSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

var Farmer = mongoose.model('Farmer', FarmerSchema);