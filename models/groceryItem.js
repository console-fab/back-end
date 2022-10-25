// include mongoose in project
const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

// creating a Schema
const groceryItemSchema = new Schema({
	name: String,
	category: String,
	quantity: Number,
	location: String,
});

// compiling model
const GroceryItem = mongoose.model('GroceryItem', groceryItemSchema);

//exporting module
module.exports = GroceryItem;
//comment
