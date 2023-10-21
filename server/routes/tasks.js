const express = require('express');
const router = express.Router();
const fs = require('fs');

// Sample tasks data (you should use a database or JSON file)
let tasks = [];

// Create a new task
router.post('/', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        completed: false,
        dueDate: req.body.dueDate,
    };
    tasks.push(newTask);
    saveTasksToJSON(); // Save the updated tasks array to JSON
    res.json(newTask);
});

// Retrieve all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

// Update a task (mark as completed or edit)
router.put('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = tasks.find((task) => task.id === taskId);

    if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
    }

    updatedTask.title = req.body.title || updatedTask.title;
    updatedTask.description = req.body.description || updatedTask.description;
    updatedTask.dueDate = req.body.dueDate || updatedTask.dueDate;
    updatedTask.completed = req.body.completed || updatedTask.completed;

    return res.json(updatedTask);
});

// Delete a task by ID
router.delete('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex(task => task.id === taskId);

    if (index === -1) {
        res.status(404).json({ error: 'Task not found' });
    } else {
        tasks.splice(index, 1);
        saveTasksToJSON(); // Save the updated tasks array to JSON
        res.json({ message: 'Task deleted' });
    }
});

// Helper function to save tasks to JSON file
function saveTasksToJSON() {
    fs.writeFileSync('data/tasks.json', JSON.stringify(tasks));
}

module.exports = router;