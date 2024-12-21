const express = require('express');
const mongoose = require('mongoose');
const categoryRouter = require('./routers/category.router');

const app = express();
const port = 5500;

// Middleware
app.use(express.json());

// MongoDB connection 
mongoose.connect('mongodb://localhost:27017',
    {
        dbName: "ecommerce"
    }
)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Category router
app.use('/category', categoryRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});