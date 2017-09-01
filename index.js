const express = require('express');
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/mismascotas');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (request, response)=>{
	return response.send('hola mundo desde express');
});

app.use('/api/v1', routes);

app.listen(3000);