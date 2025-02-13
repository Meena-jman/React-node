const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const app=express();



app.use(express.json());
// app.use(cors());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected'))
.catch(err => console.error(err));


const BlogSchema = new mongoose.Schema({
    title: String,
    content: String,
    imageUrl: String,
    views: { type: Number, default: 0 }
});


const Blog = mongoose.model('Blog', BlogSchema);
 
app.post('/api/blogs', async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(200).json(blog);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/blogs/:idhjbhjbh', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(
            req.params.idhjbhjbh,
            { $inc: { views: 1 } },
            { new: true }
        );
        if (!blog) return res.status(404).json({ message: "Blog not found" });
        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/blogs/:id', async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBlog) return res.status(404).json({ message: "Blog not found" });
        res.json(updatedBlog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/blogs/:id', async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) return res.status(404).json({ message: "Blog not found" });
        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));