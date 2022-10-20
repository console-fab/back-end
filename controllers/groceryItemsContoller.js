const express = require('express');
const GroceryItems = require('../models/groceryItem');

const router = express.Router();

// Index: Get all grocery items
// http://localhost:8000/grocery-list/
router.get('/grocery-list', (req, res, next) => {
	GroceryItems.find({}).then((groceryItem) =>
		res.status(200).json(groceryItem).catch(next)
	);
});

// Show: Get one grocery item by id
// http://localhost:8000/grocery-list/:id
router.get('/grocery-list/:id', (req, res, next) => {
	GroceryItems.findById({ _id: req.params.id }).then((groceryItem) =>
		res.status(200).json(groceryItem).catch(next)
	);
});

// Create: Add a grocery item
// http://localhost:8000/grocery-list/
router.post('/grocery-list', (req, res, next) => {
	GroceryItems.create(req.body).then((groceryItem) =>
		res.status(201).json(groceryItem).catch(next)
	);
});

// Update: Edit a grocery item by id
// http://localhost:8000/grocery-list/:id
router.patch('/grocery-list/:id', (req, res, next) => {
	GroceryItems.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
	}).then((groceryItem) => res.status(204).json(groceryItem).catch(next));
});

// Delete: Remove a grocery item by id
// http://localhost:8000/grocery-list/:id
router.delete('/grocery-list/:id', (req, res, next) => {
	GroceryItems.findByIdAndDelete({ _id: req.params.id }).then(
		(delGroceryItem) => res.status(204).json(delGroceryItem).catch(next)
	);
});

module.exports = router;
