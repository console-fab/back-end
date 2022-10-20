const mongoose = require('../connection');
const Schema = mongoose.Schema;

const groceryItemSchema = new Schema({
	item_name: String,
    category: String,
    quantity: Number,
    location: String
});

const groceryItem = mongoose.model('groceryItem', groceryItemSchema);

module.exports = groceryItem;
