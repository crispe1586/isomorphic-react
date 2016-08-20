var express = require('express');
// to render react components in the server
var engine = require('react-engine');
var path = require('path');
var port = process.env.PORT || 8080;
var app=express();

app.use(express.static(path.join(__dirname, 'public')))

// Set engine sea react-engine 
app.engine('.jsx', engine.server.create())
// Set view route
app.set('views', path.join(__dirname, 'views'))
// the engine will use jsx files
app.set('view engine', 'jsx')
// Set react-engine as the engine of express views
app.set('view', engine.expressView)

app.get('/',function(req,res){
	res.render('index', { title : 'Pokédex-React' });
});

app.listen(port, function() {
  console.log('Server running in localhost:'+port);
});