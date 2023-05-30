import "./Card.css";
import Card from './Card';
import { data } from "../../db/skills"

const skills = data

export default function Index() {
  return (
    <div className='cards-container'>
      <div className='skill'>
        <h1>Skills</h1>
        <div className='columns'>
          {skills.map((skill, index) => (
            <Card key={index} data={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}