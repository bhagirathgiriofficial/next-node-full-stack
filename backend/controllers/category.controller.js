const Category = require('../models/category.model');

// Create a new category
const categoryController = {
   
changeStatus: async (req, res) => {
    try {
        const { id, new_status } = req.params;
        const category = await Category.findByIdAndUpdate(id, { status: new_status }, { new: true });
        if (!category) {
            return res.status(200).json({ message: 'Category not found', flag: 0 });
        }
        res.status(200).json({ message: 'Category status updated successfully', flag: 1 });
    } catch (error) {
        res.status(200).json({ message: 'Error updating category status', error, flag: 0 });
    }
},

 createCategory: async (req, res) => {
        try {
            const { name, slug } = req.body;
            const existingCategory = await Category.findOne({ name });
            if (existingCategory) {
                return res.status(200).json({ message: "Category name already exists", flag: 0 });
            }
            const newCategory = new Category({ name, slug });
            await newCategory.save();
            res.status(201).json({ message: "Category created successfully", flag: 1 });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: 'Error creating category', error, flag: 0 });
        }
    },
    getCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            res.status(200).json({ categories, flag: 1 });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching categories', error, flag: 0 });
        }
    },
    getCategoryById: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            if (!category) {
                return res.status(404).json({ message: 'Category not found', flag: 0 });
            }
            res.status(200).json({ category, flag: 1 });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching category', error, flag: 0 });
        }
    },
    updateCategory: async (req, res) => {
        try {
            const { name, slug } = req.body;
            const category = await Category.findByIdAndUpdate(req.params.id, { name, slug }, { new: true });
            if (!category) {
                return res.status(404).json({ message: 'Category not found', flag: 0 });
            }
            res.status(200).json({ message: 'Category updated successfully', flag: 1 });
        } catch (error) {
            res.status(500).json({ message: 'Error updating category', error, flag: 0 });
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const category = await Category.findByIdAndDelete(req.params.id);
            if (!category) {
                return res.status(404).json({ message: 'Category not found', flag: 0 });
            }
            res.status(200).json({ message: 'Category deleted successfully', flag: 1 });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting category', error, flag: 0 });
        }
    }
};

module.exports = categoryController;