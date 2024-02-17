// TaskList.js

import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, handleUpdateTask, handleDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
