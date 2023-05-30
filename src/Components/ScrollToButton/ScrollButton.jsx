import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 100 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    
    return () => window.removeEventListener("scroll", handleScrollButtonVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {showButton && (
        <div>
          <button 
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            backgroundColor: "white",
            color: "black",
            cursor: "pointer"
          }}
          onClick={handleScrollToTop}><AiOutlineArrowUp/></button>
        </div>
      )}
    </div>
  );
}