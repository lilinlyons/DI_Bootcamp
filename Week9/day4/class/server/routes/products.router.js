const {
  getAllProduct,
  getOneProduct,
  insertProduct,
} = require("../controllers/products.controller.js");
const express = require("express");

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getOneProduct);

/** insert a product - post */
router.post("/", insertProduct);

module.exports = router;
