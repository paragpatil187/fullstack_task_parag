import { useState } from 'react';
import socket from '../utils/socket';
import AddButton from './AddButton';

const TaskInput = () => {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      socket.emit('add', task);
      setTask('');
    }
  };

  return (
    <div className="flex gap-2 mt-4 px-4">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-1 border border-gray-300 rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Add a task..."
      />
      <AddButton onClick={handleAdd}/>
        
    </div>
  );
};

export default TaskInput;
