const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  task: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model(`assignment_${process.env.FIRST_NAME}`, TaskSchema);
