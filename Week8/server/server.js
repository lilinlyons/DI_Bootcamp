const express = require("express");
const { products } = require("./config/data.js");
// console.log(products);

const app = express();

app.listen(5000, () => {
  console.log("run on 5000");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

/** params */
app.get("/api/products/:id", (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) return res.sendStatus(404);
  res.json(product);
});

/** query
 * name - query ip
 */
app.get("/api/search", (req, res) => {
  //   console.log(req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  if (filtered.length === 0) {
    return res.status(404).json({ msg: "no product matche your search!" });
  }
  res.json(filtered);
});

/**
 * CRUD API
 * Create: POST - create a new product
 * Read: GET - get data params / query
 * Update: PUT - update product
 * Delete: DELETE - delete data
 */
