import React from 'react';
import Task from './Task';
import './TaskList.css'; 
const TaskList = ({ tasks, toggleComplete, deleteTask, editTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
