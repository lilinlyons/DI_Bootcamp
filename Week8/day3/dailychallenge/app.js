const express = require("express");
const cors = require("cors");
const { router } = require("./routes/reg.router.js");

const app = express();

// body parser - req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// cors
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/register.html");
})


app.listen(process.env.PORT || 5000, () => {
    console.log(`run on ${process.env.PORT || 5000}`);
});




app.use("/", router);