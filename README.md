                                                    To-Do List Application


A simple web-based To-Do list application that allows users to manage tasks, built with React for the front end and Node.js with Express for the back end.


                                                            Features
Add, edit, complete, and delete tasks.
Responsive user interface.
Store task data in a database (JSON file).
Technology Stack
Front-End: React
Back-End: Node.js with Express
Database: JSON file (data/tasks.json)
Getting Started
Follow these instructions to get the project up and running on your local machine.


                                                            Prerequisites

Node.js: Make sure you have Node.js installed on your computer.
Installation
Clone the repository to your local machine:


git clone https://github.com/razalrahmanp/todo-app.git
cd todo-list-app
Install dependencies for both the client and server:


# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
Usage
Start the server:


cd server
node app.js
Start the client:


cd client
npm start
The client should open in your default web browser at http://localhost:3000.


                                                    API Endpoints

GET /api/tasks: Retrieve all tasks.
POST /api/tasks: Create a new task.
PUT /api/tasks/:id: Update a task's completion status.
DELETE /api/tasks/:id: Delete a task.

Project Structure

todo-list-app/

  ├── client/              
  │   ├── src/             
  │   └── ...              
  ├── server/              
  │   ├── app.js           
  │   ├── routes/          
  │   └── data/            # JSON file for task data
  └── ...

     
                                                        License

This project is licensed under the MIT License - see the LICENSE file for details.

                                                   
                                                    Acknowledgments

Create React App for bootstrapping the React application.
Express.js for the Node.js server.
