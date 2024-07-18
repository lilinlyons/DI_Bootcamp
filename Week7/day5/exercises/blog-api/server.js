import express from 'express';

const app = express();

const port = 3001;

app.use(express.json());

app.listen(port, () => {
    console.log('server is listening on port 5000')
})

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


blogs.push({
    id: 6,
    title: "Fitness Routines",
    content: "Effective workouts for beginners."
})
app.post('/posts', (req, res) => {
    console.log(req.body)

    res.json(blogs)
})

app.put('/posts/:id', (req, res) => {
    const id = 4
    const { content } = req.body;

    const blogIndex = blogs.findIndex(b => b.id === id);
    if (blogIndex !== -1) {
        blogs[blogIndex].content = "Newest Technology";
        res.json(blogs[blogIndex]);
    } else {
        res.status(404).json({ error: "Blog post not found" });
    }
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});