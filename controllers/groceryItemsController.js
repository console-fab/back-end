// include express in project
const express = require('express');
const GroceryItems = require('../models/groceryItem');

// creates a router as a module
const router = express.Router();

// define the home page route
router.get('/', async (req, res) => {
	try {
		res.json(await GroceryItems.find({}));
	} catch (error) {
		res.status(200).json(error);
	}
});

// Show: Get grocery item by id
router.get('/:id', async (req, res) => {
	try {
		res.json(await GroceryItems.findById({ _id: req.params.id }));
	} catch (error) {
		res.status(200).json(error);
	}
});

// Create: Add a grocery item
router.post('/', async (req, res) => {
	try {
		res.json(await GroceryItems.create(req.body));
	} catch (error) {
		res.status(201).json(error);
	}
});

// Update: Edit a grocery item by id
router.patch('/:id', async (req, res) => {
	try {
		res.json(
			await GroceryItems.findByIdAndUpdate({ _id: req.params.id }, req.body, {
				new: true,
			})
		);
	} catch (error) {
		res.status(204).json(error);
	}
});

// Delete: Remove a grocery item by id
router.delete('/:id', async (req, res) => {
	try {
		const deleteGroceryItem = await GroceryItems.findByIdAndDelete(
			req.params.id
		);
		res.json(deleteGroceryItem);
	} catch (error) {
		res.status(204).json(error);
	}
});

module.exports = router;
