var User = require('../models/user')

module.exports.login = function (req, res) {
    User.find({
        emailAddress: req.body.emailAddress
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            if (result.length == 1) {
                if (req.body.password === result[0].password) {
                    res.send({
                        result: "Success",
                        uid: result[0]._id
                    });
                } else {
                    res.send({
                        result: "Failure",
                        reason: "Password Incorrect"
                    });
                }

            } else if (result.length == 0) {
                res.send({
                    result: "Failure",
                    reason: "Email address not found"
                })
            } else {
                res.send({
                    result: "Failure",
                    reason: "Email found multiple times, please contact support."
                })
            }
        }
    })
}

module.exports.create = function(req,res){
    var account = new User(req.body)
    account.save(function(err, result){
        if(err === null){
            res.json(result)
        } else {
            res.json(err)
        }
    })
}