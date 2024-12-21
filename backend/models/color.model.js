const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    color_code: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: true
    }
});

const Color = mongoose.model('Color', colorSchema);

module.exports = Color;