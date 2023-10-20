const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import the tasks router
const tasksRouter = require('./routes/tasks');

// Use the tasks router for routes starting with '/api/tasks'
app.use('/api/tasks', tasksRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});