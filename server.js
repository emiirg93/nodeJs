const express = require('express');
const router = require('./network/routes');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router(app);

app.use('/app',express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');