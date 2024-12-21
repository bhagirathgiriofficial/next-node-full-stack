const express = require('express');
const categoryController = require('../controllers/category.controller.js');

const router = express.Router();

// Create a new category
router.post('/create', categoryController.createCategory);

// Get all categories
router.get('/', categoryController.getCategories);

// Get a single category by ID
router.get('/:id', categoryController.getCategoryById);

// Update a category by ID
router.put('/:id', categoryController.updateCategory);

// Delete a category by ID
router.delete('/delete/:id', categoryController.deleteCategory);

router.patch('/change-status/:id/:new_status', categoryController.changeStatus);

module.exports = router;