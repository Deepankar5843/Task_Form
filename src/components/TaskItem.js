// TaskItem.js

import React from "react";
import TaskDetailsDisplay from "./TaskDetailsDisplay";
import TaskActions from "./TaskActions";

const TaskItem = ({ task, handleUpdateTask, handleDeleteTask }) => {
  return (
    <li>
      <TaskDetailsDisplay
        title={task.title}
        description={task.description}
        completed={task.completed}
      />
      <TaskActions
        handleUpdateTask={handleUpdateTask}
        handleDeleteTask={handleDeleteTask}
        id={task.id}
        completed={task.completed}
      />
    </li>
  );
};

export default TaskItem;
