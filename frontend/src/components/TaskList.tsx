import { useEffect, useState } from 'react';
import { Task } from '../types/Task';
import axios from 'axios';
import socket from '../utils/socket';

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Initial fetch
    axios.get('http://localhost:5000/fetchAllTasks')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));

    // Listen for WebSocket updates
    socket.on('update', (updatedTasks: any[]) => {
      // Depending on backend, you might get array of strings or Task objects
      const newTasks = updatedTasks.map(task => (typeof task === 'string' ? { content: task } : task));
      setTasks(newTasks);
    });

    return () => {
      socket.off('update');
    };
  }, []);

  return (
    <div>
      <h2 className="text-sm font-semibold mb-2">Notes</h2>
      <div className="max-h-60 overflow-y-auto rounded px-2 py-1 text-sm space-y-1">
        
          {tasks.map((task, index) => (
            <div key={index} className="border-b py-1">
              {task.content}
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default TaskList;
