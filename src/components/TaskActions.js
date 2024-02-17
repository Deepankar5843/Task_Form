// TaskActions.js

import React from "react";

const TaskActions = ({ handleUpdateTask, handleDeleteTask, id, completed }) => {
  return (
    <div>
      <button onClick={() => handleUpdateTask(id, !completed)}>
        {completed ? "Mark as Not Completed" : "Mark as Completed"}
      </button>
      <button style={{ marginLeft: 20 }} onClick={() => handleDeleteTask(id)}>
        Delete
      </button>
    </div>
  );
};

export default TaskActions;
