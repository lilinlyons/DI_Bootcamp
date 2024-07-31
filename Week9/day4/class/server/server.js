const express = require("express");
const cors = require("cors");
const  prouter  = require("./routes/products.router.js");
// const {logger,auth } = require('./middlewares/utils.js')
// const { urouter } = require("./routes/users.router.js");

const app = express();

// body parser - req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// cors
app.use(cors());

/**
 * Middleware - function -
 * request -> middleware function -> response
 */

// app.use('/',logger);
// // app.use('/api/users', auth)

// app.get('/users', auth, (req,res) => {

// })

app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});

/**
 *  server
 *    |_ config - connection to databases
 *    |_ models - queries to database/files
 *    |_ controllers - function implements code - request, response
 *    |_ routes - route for api
 */

app.use("/api/products", prouter);

