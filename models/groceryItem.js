const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const groceryItemSchema = new Schema({
	name: String,
	category: String,
	quantity: Number,
	location: String,
});

const GroceryItem = mongoose.model('GroceryItem', groceryItemSchema);

module.exports = GroceryItem;
//comment
