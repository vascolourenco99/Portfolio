import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";

const scrollToSection = (event) => {
  event.preventDefault();
  const sectionId = event.target.getAttribute("href");
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo" style={{ color: 'white' }}>VascoDev</h2>
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <AiOutlineMenu style={{ color: 'white' }}/>
        </label>
        <div className="menu">
          <ul className="list">
            <li>
              <a
                style={{ textDecoration: 'none', color: 'white',     fontSize: "20px" }}
                href="#contacts"
                onClick={scrollToSection}
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}