import React, { useState } from "react";

const ProjectForm = ({ addProject }) => {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("active");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = { name, dueDate, status };
    addProject(newProject);
    setName("");
    setDueDate("");
    setStatus("active");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-light p-3 rounded mb-3">
      <h2>Add New Project</h2>
      <div className="form-group">
        <label>Project Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Due Date</label>
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Add Project
      </button>
    </form>
  );
};

export default ProjectForm;
