var ChartTest = require('../models/charttest')

module.exports.get = function(req,res){
   
    var data = {},
        labels = [],
        values = [];
    
    ChartTest.find({},{_id:0}, function(err, result){        
        for(key in result){
            labels.push(result[key].label)
            values.push(result[key].value)
        }
        
        data = {
            labels: labels,
            values: values
        }
        console.log(data)
        res.json(data)
    })
}