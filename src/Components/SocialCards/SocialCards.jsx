/* eslint-disable react/prop-types */
import "./SocialCards.css";

export default function SocialCards({ socialCards }) {
  return (
    <div className="social-cards-container" id="contacts">
      <div className="social-title">
        <h2 style={{color: "black"}} >Connect with Me!</h2>
      </div>
      <div className="social-cards-column">
        {socialCards.map((card, index) => (
          <a
            key={index}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="social-card">
            <div className="social-card-icon">
              <span style={{ fontSize: "2.1rem", color: "#214F4B" }}>{card.icon}</span>
              <h6>{card.iconText}</h6>
            </div>
              <p className="social-card-smll-text">{card.smallText}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}