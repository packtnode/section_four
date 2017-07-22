const express = require('express');
const app = express();
const mustache = require('mustache-express');


app.use("/", express.static(__dirname + '/public'));
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get("/",function(req,res){
	res.render("index");
})

app.listen(3000);