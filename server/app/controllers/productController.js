const Product = require('../models/product'); // Adjust the path as needed

// // Fetch all products
// exports.getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.findAll();
//     res.json(products);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// Fetch a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const { page = 1, perPage = 6, category, sort } = req.query;

    // Convert page and perPage to integers
    const pageNumber = parseInt(page);
    const itemsPerPage = parseInt(perPage);

    const offset = (pageNumber - 1) * itemsPerPage;

    let where = {};
    if (category) {
      where.category = category;
    }

    let order = [];
    if (sort) {
      switch (sort) {
        case 'price_asc':
          order = [['price', 'ASC']];
          break;
        case 'price_desc':
          order = [['price', 'DESC']];
          break;
        case 'rating':
          order = [['rating', 'DESC']];
          break;
        // Add more sorting options as needed
      }
    }

    const { count, rows } = await Product.findAndCountAll({
      where,
      order,
      limit: itemsPerPage,
      offset,
    });

    res.json({
      totalItems: count,
      totalPages: Math.ceil(count / itemsPerPage),
      currentPage: pageNumber,
      products: rows,
    });
  } catch (error) {
    res.status(500).send('Server error: ' + error.message);
  }
};


