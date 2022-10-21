// Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const groceryItemsController = require('./controllers/groceryItemsController');
const PORT = process.env.PORT || 8000;
//comment
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Controllers
app.use('/grocery-list', groceryItemsController);

app.set('port', PORT);

app.listen(8000, () => {
	console.log('🛒 cart... start!!! on port:' + PORT);
});