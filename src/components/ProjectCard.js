import React from "react";

const ProjectCard = ({ project, deleteProject, updateProject }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>Due Date: {project.dueDate}</p>
      <p>Status: {project.status}</p>
      <button onClick={() => deleteProject(project.id)}>Delete</button>
      <button onClick={() => updateProject({ ...project, status: project.status === "active" ? "completed" : "active" })}>
        {project.status === "active" ? "Mark as Completed" : "Mark as Active"}
      </button>
    </div>
  );
};

export default ProjectCard;
