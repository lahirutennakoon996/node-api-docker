const mongoose = require("mongoose");

const ProductModel = require("./product.model");
const repository = require("../../services/repository.service");

/**
 * Create product
 * @param body
 * @returns {Promise<void>}
 */
module.exports.createProduct = async (body) => {
  let product = new ProductModel(body);
  return await repository.save(product);
};

/**
 * Get product by id
 * @param productId
 * @returns {Promise<any>}
 */
module.exports.getProductById = async (productId) => {
  return await repository.findOne(ProductModel, {
    _id: productId,
  });
};

/**
 * Get products
 * @returns {Promise<any>}
 */
module.exports.getProducts = async () => {
  return await repository.findMany(ProductModel, {});
};

/**
 * Update product
 * @param body
 * @returns {Promise<unknown>}
 */
module.exports.updateProduct = async (body) => {
  return await repository.updateOne(ProductModel, {
    _id: body._id,
  }, body, {
    new: true,
  });
};

/**
 * Delete product
 * @param productId
 * @returns {Promise<unknown>}
 */
module.exports.deleteProduct = async (productId) => {
  await repository.deleteOne(ProductModel,
    {
      _id: productId,
    });

  return true;
};
