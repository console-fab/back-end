// include express in project
const express = require('express');
const app = express();

// CORS package for providing a middleware
const cors = require('cors');

//including "controller" modules for grocery Item
const groceryItemsController = require('./controllers/groceryItemsController');

// set the environment variable PORT to tell web server what port to listen on
const PORT = process.env.PORT || 8000;

// middleware function that parses incoming JSON requests and puts the parsed data in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
	res.redirect('/grocery-list');
});

// This function adding new middleware to the grocery-list
app.use('/grocery-list', groceryItemsController);

// used to assign the setting name to port
app.set('port', PORT);

// listen the connections
app.listen(PORT, () => {
	console.log('🛒 cart... start!!! on port:' + PORT);
});
