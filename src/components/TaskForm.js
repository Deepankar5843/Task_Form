// TaskForm.js

import React from "react";
import TaskFormInput from "./TaskFormInput";

const TaskForm = ({ newTask, setNewTask, handleAddTask }) => {
  return (
    <div>
      <h2>Add a new task</h2>
      <TaskFormInput
        label="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
      />
      <TaskFormInput
        label="Description"
        value={newTask.description}
        onChange={(e) =>
          setNewTask({ ...newTask, description: e.target.value })
        }
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
