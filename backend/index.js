const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const redis = require('redis');
const cors = require('cors');
require('dotenv').config();

const TaskModel = require('./models/Task');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

const PORT = process.env.PORT || 5000;
const REDIS_KEY = `FULLSTACK_TASK_${process.env.FIRST_NAME}`;

// Redis client
const redisClient = redis.createClient({
  url: `redis://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

redisClient.connect().then(() => console.log('Redis connected')).catch(console.error);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(console.error);

// Middleware
app.use(cors());
app.use(express.json());

// WebSocket: handle add task
io.on('connection', (socket) => {
  console.log('WebSocket client connected');

  socket.on('add', async (task) => {
    const cache = await redisClient.get(REDIS_KEY);
    let tasks = cache ? JSON.parse(cache) : [];

    tasks.push(task);

    if (tasks.length > 50) {
      const bulkInsert = tasks.map(t => ({ task: t }));
      await TaskModel.insertMany(bulkInsert);
      await redisClient.del(REDIS_KEY);
      io.emit('update', []); // Send empty list after flushing
    } else {
      await redisClient.set(REDIS_KEY, JSON.stringify(tasks));
      io.emit('update', tasks);
    }
  });
});

// REST: fetch all tasks
app.get('/fetchAllTasks', async (req, res) => {
  const cache = await redisClient.get(REDIS_KEY);
  const cacheTasks = cache ? JSON.parse(cache) : [];
  const dbTasks = await TaskModel.find({}, 'task -_id');
  const dbList = dbTasks.map(doc => doc.task);

  res.json([...cacheTasks, ...dbList]);
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
