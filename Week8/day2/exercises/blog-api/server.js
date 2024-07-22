const express = require("express");
const cors = require("cors");
const { router } = require("./routes/posts.router.js");

const app = express();

// body parser - req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// cors
app.use(cors());

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

app.use("/", router);
