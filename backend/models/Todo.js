// backend/models/Todo.js
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: String
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo; // export the model to use it in server.js


