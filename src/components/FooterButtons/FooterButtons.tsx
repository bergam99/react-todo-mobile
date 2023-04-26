import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

type FooterButtonsProps = {
  color: string;
};

const FooterButtons = ({ color }: FooterButtonsProps) => {
  const location = useLocation();
  const [buttonColor, setButtonColor] = useState(color);
  useEffect(() => {
    // Check if current path matches the button's link path
    if (location.pathname === "/my-page") {
      setButtonColor("gray");
    } else {
      setButtonColor(color);
    }
  }, [location.pathname, color]);

  useEffect(() => {
    // Reset button color when leaving the page
    return () => {
      setButtonColor(color);
    };
  }, [color]);

  const handleButtonClick = () => {
    const newColor = buttonColor === color ? "gray" : color;
    setButtonColor(newColor);
  };

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={handleButtonClick}
    >
      Click me to change color
    </button>
  );
};
export default FooterButtons;
