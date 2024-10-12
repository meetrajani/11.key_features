import React from "react";

const Dashboard = ({ projects, deleteProject, updateProject }) => {
  const markAsCompleted = (project) => {
    const updatedProject = { ...project, status: "completed" };
    updateProject(updatedProject);
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{project.name}</h5>
              <p className="card-text">
                Due Date: {project.dueDate} <br />
                Status: {project.status}
              </p>

              {project.status === "active" && (
                <button
                  className="btn btn-success"
                  onClick={() => markAsCompleted(project)}
                >
                  Mark as Completed
                </button>
              )}

              <button
                className="btn btn-danger ml-2"
                onClick={() => deleteProject(project.id)}
              >
                Delete Project
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
