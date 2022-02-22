const mongoose = require("mongoose");
mongoose.pluralize(null);

const RegistrationSchema = mongoose.Schema({
    Username : String,
    Password : String,
    EmailID : String,
    MobileNo : String,
    InsertedTime : {type : Date, default : Date.now}
});

const RegistrationModel = mongoose.model("RegistrationMaster",RegistrationSchema);

module.exports = RegistrationModel;