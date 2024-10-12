import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./components/Dashboard";
import ProjectForm from "./components/ProjectForm";
import PaymentList from "./components/PaymentList";
import PaymentForm from "./components/PaymentForm";
import EarningsOverview from "./components/EarningsOverview"; 
import addnewproject from "./IMG/add-new-project.png";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/projects").then((response) => {
      setProjects(response.data);
    });

    axios.get("http://localhost:3001/payments").then((response) => {
      setPayments(response.data);
    });
  }, []);

  const addProject = (newProject) => {
    axios
      .post("http://localhost:3001/projects", newProject)
      .then((response) => setProjects([...projects, response.data]));
  };

  const deleteProject = (id) => {
    axios.delete(`http://localhost:3001/projects/${id}`).then(() => {
      setProjects(projects.filter((project) => project.id !== id));
    });
  };

  const updateProject = (updatedProject) => {
    axios
      .put(
        `http://localhost:3001/projects/${updatedProject.id}`,
        updatedProject
      )
      .then(() => {
        setProjects(
          projects.map((project) =>
            project.id === updatedProject.id ? updatedProject : project
          )
        );
      });
  };

  const addPayment = (newPayment) => {
    setPayments([...payments, newPayment]);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Project & Payment Dashboard</h1>
      <div className="">
        <div className="row">
          <div className="col">
            <ProjectForm addProject={addProject} />
          </div>
          <div className="col">
            <img src={addnewproject} alt="" />
          </div>
        </div>
        <div className="">
          <Dashboard
            projects={projects}
            deleteProject={deleteProject}
            updateProject={updateProject}
          />
        </div>
        <div className="">
          <PaymentForm addPayment={addPayment} />
        </div>
        <div className="">
          <PaymentList payments={payments} />
        </div>
        <div className="">
          <EarningsOverview payments={payments} />
        </div>
      </div>
    </div>
  );
};

export default App;
