import React from 'react';
import './TaskForm.css'; 
function TaskForm({ newTask, setNewTask, addTask }) {
  const handleInputChange = (e) => {
    setNewTask({ ...newTask, title: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title.trim() === '') return; // Prevent empty task
    addTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask.title}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
