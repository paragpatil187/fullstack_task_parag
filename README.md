# Task Management App

A full-stack task management app with real-time updates using WebSockets, Redis for caching, and MongoDB for permanent storage.

## Features

- **Add tasks**: Add tasks in real-time with WebSockets.
- **Redis Cache**: Tasks are stored in Redis and moved to MongoDB when the count exceeds 50.
- **Responsive UI**: Built with React.js and styled with Tailwind CSS.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, WebSocket (`socket.io`)
- **Database**: MongoDB
- **Cache**: Redis

## Setup

### Backend

1. Clone and navigate to the backend repo:
    ```bash
    git clone https://github.com/paragpatil187/fullstack_task_parag/backend.git
    cd task-backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file:
    ```bash
    MONGO_URI=mongodb://your-mongo-uri
    REDIS_HOST=your-redis-host
    ```

4. Start the backend:
    ```bash
    npm start
    ```

### Frontend

1. Clone and navigate to the frontend repo:
    ```bash
    git clone https://github.com/paragpatil187/fullstack_task_parag/frontend.git
    cd task-frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend:
    ```bash
    npm start
    ```

### Deployment

- **Backend**: Deploy on Render or your preferred platform.
- **Frontend**: Deploy on Netlify or your chosen platform.
