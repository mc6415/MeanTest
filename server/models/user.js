var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    emailAddress:   {type: String, required: true, unique: true},
    firstName:      {type: String, required: true},
    lastName:       {type: String, required: true},
    addLine1:       {type: String, required: true},
    addLine2:       {type: String, required: true},
    county:         {type: String},
    postcode:       {type: String},
    password:       {type: String, required: true},
    creationDate:   {type: Date, required: true}
})