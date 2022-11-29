const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
   console.log('listening on 8080')
});

app.use('/js', express.static('js'));
app.use('/images', express.static('images'));
app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function(req, res){
   res.sendFile(__dirname + '/build/index.html')
});

