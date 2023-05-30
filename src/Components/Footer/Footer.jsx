import './Footer.css';
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const links = {
  linkedin: 'https://www.linkedin.com/in/vasco-lourenco-correia/',
  github: 'https://github.com/vascolourenco99',
  email: 'vascolourenco99@gmail.com',
};

export default function Footer() {

  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="social-footer">
          <ul className="icons-footer">
            <li className="list-gap">
              <Link to={links.linkedin} target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="icon-linkedin" />
              </Link>
            </li>
            <li className="list-gap">
              <Link to={links.github} target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="icon-github" />
              </Link>
            </li>
            <li className="list-gap">
              <a href={`mailto:${links.email}`}>
                <AiOutlineMail className="icon-mail" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-info-container">
          <p className="footer-text">© {new Date().getFullYear()} VascoWebDev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}