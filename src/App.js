import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import axios from 'axios';
import { motion } from 'framer-motion'; // Import Framer Motion

function App() {
    const containerVariants = {
        hidden: { opacity: 0, x: '100vw' },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: 'spring', delay: 0.5 },
        },
    };

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '' });

    const fetchTasks = async() => {
        try {
            const response = await axios.get('http://localhost:5000/api/tasks'); // Adjust the URL to your server
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const addTask = async() => {
        try {
            const response = await axios.post('http://localhost:5000/api/tasks', newTask); // Adjust the URL to your server
            setTasks([...tasks, response.data]);
            setNewTask({ title: '' });
        } catch (error) {
            console.error('Error adding a task:', error);
        }
    };

    const toggleComplete = async(taskId, completed) => {
        try {
            await axios.put(`http://localhost:5000/api/tasks/${taskId}`, { completed }); // Adjust the URL to your server
            const updatedTasks = tasks.map(task => {
                if (task.id === taskId) {
                    task.completed = completed;
                }
                return task;
            });
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error toggling task completion:', error);
        }
    };

    const deleteTask = async(taskId) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${taskId}`); // Adjust the URL to your server
            const updatedTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updatedTasks);
        } catch (error) {
            console.error('Error deleting a task:', error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return ( <
        motion.div className = "app-container"
        variants = { containerVariants }
        initial = "hidden"
        animate = "visible" >
        <
        h1 > ToDo List < /h1> <
        TaskForm newTask = { newTask }
        setNewTask = { setNewTask }
        addTask = { addTask }
        /> <
        TaskList tasks = { tasks }
        toggleComplete = { toggleComplete }
        deleteTask = { deleteTask }
        /> < /
        motion.div >
    );
}

export default App;