const Product = require("../models/product");
const productService = require("../services/productService");

// Fetch a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send("Product not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//Fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const response = await productService.getAllProducts(req.query);
    res.json(response);
  } catch (error) {
    res.status(500).send("Server error: " + error.message);
  }
};
