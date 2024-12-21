const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    stock_status: {
        type: Boolean,
        required: true,
        default: true // true for in_stock, false for out_of_stock
    },
    status: {
        type: Boolean,
        required: true,
        default: true // true for active, false for inactive
    },
    original_price: {
        type: Number,
        required: true
    },
    discounted_price: {
        type: Number,
        required: true
    },
    main_image: {
        type: String,
        required: true
    },
    other_images: [{
        type: String
    }],
    colors: [{
        type: Schema.Types.ObjectId,
        ref: 'Color'
    }],
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
