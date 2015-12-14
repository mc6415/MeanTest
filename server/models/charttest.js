var mongoose = require('mongoose');

module.exports = mongoose.model('ChartTest', {
    label:   {type: String, required: true, unique: true},
    value: {type: Number}
}, 'chartTest');