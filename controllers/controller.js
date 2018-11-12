const Product = require('../models/model');

exports.getData =  (req, res) => {
    Product.findById(req.params.id, (err, product) => {
            if (err) throw err;
            res.send(product);
    });
};

exports.postData =  (req, res) => {
    let product = new Product({
        name: req.body.name,
        mobile_number: req.body.mobile_number
    });
    product.save((err) => {
        if (err) throw err;
        res.send('Product Created');
    });
};


exports.putData =  (req, res) => {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body },(err, product) =>{
        if (err) throw err;
        res.send('Product Updated');
    });
};


exports.deleteData =  (req, res) => {
    Product.findByIdAndDelete(req.params.id, (err, product) =>{
        if (err) throw err;
        res.send('Product Deleted');
    });
};

