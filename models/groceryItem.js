const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const groceryItemSchema = new Schema({
	item_name: {type: String, required: true},
    category: String,
    quantity: Number,
    location: String
});

const groceryItem = mongoose.model('groceryItem', groceryItemSchema);

module.exports = groceryItem;
