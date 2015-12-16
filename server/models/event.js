var mongoose = require('mongoose');

module.exports = mongoose.model('Event', {
    emailAddress:   {type: String, required: true, unique: true},
    title: {type: String},
    description: {type: String},
    start: {type: Date},
    end: {type: Date},
    url: {type: String}
})