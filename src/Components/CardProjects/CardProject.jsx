/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import "./CardProject.css";

export default function CardProject({ data }) {
  return (
    <div className="project-container">
      <div className="card-content">
        <img className="project-image" src={data.image} alt=""/>
        <div className="project-infos">
          <h1 className="title-project" style={{ color: 'white' }}>
            {data.title}
          </h1>
          <h2 className="subtitle-project" style={{ color: 'white' }}>
            {data.subtitle}
          </h2>
          <p className="description-project" style={{ color: 'white' }}>
            {data.description}
          </p>
          <div className="stack-project">
            <h2 className="stack-title" style={{ color: 'white' }}>Stack:</h2>
            {data.stacks.map((stack, index) => (
              <span className="stack-item" key={index}>{stack}</span>
            ))}
          </div>
            <div className="stack-buttons">
              {data.demo && (
                <button className="demo-button">
                  <Link to={data.demo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                    Demo
                  </Link>
                </button>
                )}
              {data.gitHub && (
                <button className="source-button">
                  <Link to={data.gitHub} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                    Source Code
                  </Link>
                </button>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}