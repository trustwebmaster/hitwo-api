const mongoose = require('mongoose');

var productsSchema = mongoose.Schema({
    brandName: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        uniquw: true
    },
    colors: {
        type: Array,
        default: [],
    },
    size: {
        type: Number,
        default: null
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    shopName: {
        type: String
    },
    shopId: {
        type: String
    },
    shopAddress: {
        type: String
    },
    shopLocation: {
        latitude: String,
        longitude: String
    }
});

module.exports = mongoose.model('Products', productsSchema);
