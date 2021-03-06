const Products = require('./../models/products');
const router = require('express').Router();

router.post('/', (req, res) => {
    var {brandName, productName, imageUrl, colors, size, price} = req.body;

    var product = new Products();
    product.brandName = brandName;
    product.productName = productName;
    product.imageUrl = imageUrl;
    product.colors = colors;
    product.size = size;
    product.price = price;
    product.save().then((data) => {
        res.json(data);
    });
});

module.exports = router;