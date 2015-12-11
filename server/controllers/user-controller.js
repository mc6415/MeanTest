var User = require('../models/user')

module.exports.get = function(req,res){
    var uid = req.params.id
    
    User.find({_id : uid}, function(err, result){
        res.json(result[0])
    })
    
}