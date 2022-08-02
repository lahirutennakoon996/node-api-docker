const productService = require("./product.service");
const { successWithData, successWithMessage, customError } = require("../../services/response.service");

/**
 * Create new product
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return successWithData(product, res);
  }
  catch (error) {
    return customError(`${error}`, res);
  }
};

/**
 * Get product by id
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    return successWithData(product, res);
  }
  catch (error) {
    return customError(`${error}`, res);
  }
};

/**
 * Get products
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.getProducts = async (req, res) => {
  try {
    const data = await productService.getProducts();
    return successWithData(data, res);
  }
  catch (error) {
    return customError(`${error}`, res);
  }
};

/**
 * Update product
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.body);
    return successWithData(product, res);
  }
  catch (error) {
    return customError(`${error}`, res);
  }
};

/**
 * Delete product
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    return successWithMessage("Product deleted.", res);
  }
  catch (error) {
    return customError(`${error}`, res);
  }
};
