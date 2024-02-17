// App.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = () => {
    axios
      .post("http://localhost:5000/tasks", newTask)
      .then(() => {
        setNewTask({ title: "", description: "" });
        fetchTasks();
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  const handleUpdateTask = (id, completed) => {
    axios
      .put(`http://localhost:5000/tasks/${id}`, { completed })
      .then(fetchTasks)
      .catch((error) => console.error("Error updating task:", error));
  };

  const handleDeleteTask = (id) => {
    axios
      .delete(`http://localhost:5000/tasks/${id}`)
      .then(fetchTasks)
      .catch((error) => console.error("Error deleting task:", error));
  };

  const fetchTasks = () => {
    axios
      .get("http://localhost:5000/tasks")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <TaskList
        tasks={tasks}
        handleUpdateTask={handleUpdateTask}
        handleDeleteTask={handleDeleteTask}
      />
      <TaskForm
        newTask={newTask}
        setNewTask={setNewTask}
        handleAddTask={handleAddTask}
      />
    </div>
  );
};

export default App;
