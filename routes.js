const router = require("express").Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json({ limit: "50mb" }));

router.use("/products", require("./src/product/product.router"));

module.exports = router;
