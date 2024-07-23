const express = require("express");
const cors = require("cors");
const { router } = require("./routes/task.router");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// cors
app.use(cors());

app.listen(process.env.PORT || 3001, () => {
    console.log(`run on ${process.env.PORT || 3001}`);
});

app.use("/", router);