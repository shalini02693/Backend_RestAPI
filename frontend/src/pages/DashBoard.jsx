import { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';
import '../styles/dashboard.css';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchTasks = async () => {
    try {
      const res = await API.get('/tasks');
      setTasks(res.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async () => {
    try {
      await API.post('/tasks', {
        title,
        description
      });

      setTitle('');
      setDescription('');
      fetchTasks();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar />

      <h2 className="dashboard-title">Dashboard</h2>

      <input
        className="dashboard-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />

      <br />

      <textarea
        className="dashboard-textarea"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task description"
      />

      <br />

      <button className="dashboard-button" onClick={createTask}>
        Create Task
      </button>

      <hr />

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
}