const { Op } = require("sequelize");

const Product = require("../models/product");

exports.getAllProducts = async (queryParams) => {
  const { page = 1, category, sort, search } = queryParams; // Include search in the destructured queryParams
  const pageNumber = Math.max(parseInt(page, 10) || 1, 1);
  const perPage = 6;
  const offset = (pageNumber - 1) * perPage;

  const whereClause = {};
  if (category) {
    whereClause.category = category;
  }

  if (search) {
    whereClause.name = {
      [Op.iLike]: `%${search}%`,
    };
  }

  const orderClause = [];
  if (sort) {
    const [field, order] = sort.split("_");
    orderClause.push([field, order.toUpperCase()]);
  }

  const { count, rows } = await Product.findAndCountAll({
    where: whereClause,
    order: orderClause,
    limit: perPage,
    offset,
  });

  const products = rows.map((product) => product.toJSON());

  return {
    totalItems: count,
    totalPages: Math.ceil(count / perPage),
    currentPage: pageNumber,
    products: products,
  };
};
