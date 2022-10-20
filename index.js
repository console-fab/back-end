// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const groceryItemsController = require('./controllers/groceryItemsController');
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Redirect
app.get('/', (req, res) => {
	res.redirect('/grocery-list');
});

// Controllers
app.use('/grocery-list', groceryItemsController);

app.listen(8000, () => {
	console.log('🛒 cart... start!!! on port:' + PORT);
});
