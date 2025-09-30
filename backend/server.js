const express = require('express'); // Import Express framework
const mongoose = require('mongoose'); // Import Mongoose for MongoDB
const cors = require('cors'); // Allow cross-origin requests

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies in requests

// Replace with your MongoDB Atlas connection string
mongoose.connect('mongodb+srv://MERN:MERN123@cluster0.om0ibxb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log(err));

const Todo = require('./models/Todo'); // import the model

// Routes will use Todo.find(), Todo.create(), etc.
// 6. PASTE ROUTES HERE
// GET all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new todo
app.post('/todos', async (req, res) => {
  try {
    const newTodo = new Todo({ text: req.body.text });
    await newTodo.save();
    res.json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 7. Start server
app.listen(5001, () => console.log('🚀 Server running on http://localhost:5001'));

