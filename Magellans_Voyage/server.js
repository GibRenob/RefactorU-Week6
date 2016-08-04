var express    = require('express');
var bodyParser = require('body-parser');
var logger     = require('morgan');
var fs         = require('fs');

var app = express();

// Middleware //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(__dirname + '/public'));

// Routes //
app.get('/', function(req, res) {
  res.sendFile('index.html', { root: './public/html'});
})

app.get('/:name', function(req, res, next) {
    var name = req.params.name;
    fs.access(`./public/html/${name}.html`, function(err) {
      if (!err) {
        return res.sendFile(`${name}.html`, { root: './public/html'})
      } else {
        return next();
      }
    })
})

// Listener //
var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`Server up and running, Captain. We're on port: ${port}`);
})
