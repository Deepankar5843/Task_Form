// TaskFormInput.js

import React from "react";

const TaskFormInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}:</label>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default TaskFormInput;
