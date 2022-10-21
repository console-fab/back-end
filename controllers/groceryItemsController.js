const express = require('express');
const GroceryItems = require('../models/groceryItem');

const router = express.Router();

// Index: Get all grocery items
//localhost:8000/grocery-list/
http: router.get('/', async (req, res) => {
	try {
		res.json(await GroceryItems.find({}));
	} catch (error) {
		res.status(400).json(error);
	}
});

// Show: Get one grocery item by id
// http://localhost:8000/grocery-list/:id
router.get('/:id', async (req, res) => {
	try {
		res.json(await GroceryItems.findById({ _id: req.params.id }));
	} catch (error) {
		res.status(400).json(error);
	}
});

// Create: Add a grocery item
// http://localhost:8000/grocery-list/
router.post('/', async (req, res) => {
	try {
		res.json(await GroceryItems.create(req.body));
	} catch (error) {
		res.status(400).json(error);
	}
});

// Update: Edit a grocery item by id
// http://localhost:8000/grocery-list/:id
router.patch('/:id', async (req, res) => {
	try {
		res.json(
			await GroceryItems.findByIdAndUpdate({ _id: req.params.id }, req.body, {
				new: true,
			})
		);
	} catch (error) {
		res.status(400).json(error);
	}
});

// Delete: Remove a grocery item by id
// http://localhost:8000/grocery-list/:id
router.delete('/:id', async (req, res, next) => {
	try {
		const deleteGroceryItem = await GroceryItems.findByIdAndDelete(
			req.params.id
		);
		res.json(deleteGroceryItem);
	} catch (err) {
		next(err);
	}
});
module.exports = router;
//comment
