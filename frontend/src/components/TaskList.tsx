import { useEffect, useState } from 'react';
import { Task } from '../types/Task';
import axios from 'axios';
import socket from '../utils/socket';

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    // Initial fetch
    axios.get('https://fullstack-task-parag.onrender.com/fetchAllTasks')   //     http://localhost:5000/fetchAllTasks
      .then(res =>{
        const normalized = res.data.map((task: any) =>
            typeof task === 'string' ? { content: task } : task
          );
          setTasks(normalized);
      })
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
    <div className='px-4'>
      <div className="text-md font-bold mb-2 mt-4">Notes</div>
      <div className="max-h-60 overflow-y-auto rounded px-2 py-1 text-sm space-y-1">
        
          {tasks.map((task, index) => (
            <div key={index} className="border-t py-2 text-base ">
              {task.content}
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default TaskList;
