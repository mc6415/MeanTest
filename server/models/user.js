var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
    emailAddress: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true}
})