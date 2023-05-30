import CardProject from "./CardProject";
import "./CardProject.css";
import { data } from "../../db/projects";

const projects = data

export default function Index() {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <h2 className="projects-title-style">Projects</h2>
        <div className="projects-container-cards">
          {projects.map((project, index) => (
            <CardProject key={index} data={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
