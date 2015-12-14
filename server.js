var express 		= require('express'),
	app 			= express(),
	bodyParser		= require('body-parser'),
	mongoose		= require('mongoose'),
    http            = require('http'),
    controllers     = require('./server/controllers/namespace.js')          

mongoose.connect('mongodb://localhost:27017/Test2')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/static', express.static(__dirname + '/client/static'));
app.use('/controllers', express.static(__dirname + '/client/js/controllers'))

app.get('/', function(req,res){
	res.sendFile(__dirname + '/client/views/index.html');
})

app.post('/api/login', controllers.login.login);
app.post('/api/register', controllers.login.create);
app.get('/api/user/:id', controllers.user.get);

app.get('/test', controllers.chart.get);

app.listen(3000, function(){
    console.log("server is listening on port 3000")
})