const express = require("express");

const router = express.Router();

const { permissions } = require("./product.permission");
const productController = require("./product.controller");

router
  .route(permissions.createProduct.path)
  .post(productController.createProduct);

router
  .route(permissions.getProducts.path)
  .get(productController.getProducts);
router
  .route(permissions.getProductById.path)
  .get(productController.getProductById);

router
  .route(permissions.updateProduct.path)
  .put(productController.updateProduct);

router
  .route(permissions.deleteProduct.path)
  .delete(productController.deleteProduct);

module.exports = router;