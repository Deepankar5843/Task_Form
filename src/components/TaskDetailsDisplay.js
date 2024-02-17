// TaskDetailsDisplay.js

import React from "react";

const TaskDetailsDisplay = ({ title, description, completed }) => {
  return (
    <div>
      <span>
        <strong>Title : </strong>
        {title}
      </span>
      <br />
      <span>
        <strong>Description : </strong>
        {description}
      </span>
      <br />
      <span>
        <strong>{completed ? "Completed" : "Not Completed"} : </strong>
      </span>
    </div>
  );
};

export default TaskDetailsDisplay;
