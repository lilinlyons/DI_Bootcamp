const express = require("express");

const app = express();

const port = 5000;

app.use(express.json());

app.use("/", express.static(__dirname ));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

let blogs = [
    {
        id: 1,
        title: "My First Blog",
        content: "Welcome to my first blog post!"
    },
    {
        id: 2,
        title: "Travel Tips",
        content: "Top 5 tips for a successful trip."
    },
    {
        id: 3,
        title: "Healthy Eating",
        content: "Quick tips for a balanced diet."
    },
    {
        id: 4,
        title: "Tech Trends",
        content: "Latest trends in technology."
    },
    {
        id: 5,
        title: "Book Reviews",
        content: "Review of the latest bestsellers."
    }
]
app.get('/posts', (req, res) => {
    res.json(blogs)
});


app.get("/posts/:blogID", (req, res) => {
    const id = Number(req.params.blogID);
    const blog = blogs.find((blog) => blog.id === id);
    res.json(blog);
});


app.post("/posts", (req, res) => {
    console.log(req.body);
    const { id, title, content } = req.body;
    const newPost = { ...req.body, id: blogs.length + 1 };
    blogs.push(newPost);
    res.json(blogs);
});

app.put("/posts/:id", (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const index = blogs.findIndex((item) => item.id == id);
    if (index === -1) {
        return res.status(404).json({ message: "not found" });
    }

    blogs[index] = {
        ...blogs[index],
        title,
        content,
    };

    res.json({ blogs, msg: "ok", status: 111, active: true });
});

app.delete("/posts/:id", (req, res) => {
    const { id } = req.params;
    const index = blogs.findIndex((item) => item.id == id);

    if (index === -1) {
        return res.status(404).json({ message: "not found" });
    }

    blogs.splice(index, 1);

    res.json(blogs);
});