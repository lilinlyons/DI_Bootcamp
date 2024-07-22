import express from 'express';
import {fetchPosts} from "./data/dataService.js";

const app = express();

const port = 5000;

app.use(express.json());




app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})

app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log("The data has been successfully retrieved and sent as a response.")
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Error fetching posts' });
    }
});