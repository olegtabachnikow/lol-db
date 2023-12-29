import React from "react";
import "./Navigation.css";
import { useNavigate, useLocation } from "react-router-dom";

function Navigation() {
  const [isActive, setIsActive] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  function handleClick(path) {
    setIsActive(false);
    navigate(path);
  }
  return (
    <>
      <button
        className={`navigation__burger-button ${
          isActive && "navigation__burger-button_active"
        }`}
        type="button"
        onClick={() => setIsActive((state) => !state)}
      >
        <div
          className={`navigation__burger-button-icon ${
            isActive && "navigation__burger-button-icon_active"
          }`}
        ></div>
        <div
          className={`navigation__burger-button-icon-second ${
            isActive && "navigation__burger-button-icon-second_active"
          }`}
        ></div>
      </button>
      <nav className={`navigation ${isActive && "navigation_active"}`}>
        <button
          type="button"
          onClick={() => handleClick("/")}
          className={`navigation__button ${
            location.pathname === "/" && "navigation__button_active"
          }`}
        >
          home
        </button>
        <button
          type="button"
          onClick={() => handleClick("/champions/")}
          className={`navigation__button ${
            location.pathname === "/champions/" && "navigation__button_active"
          }`}
        >
          champion list
        </button>
        <button
          type="button"
          onClick={() => handleClick("/items")}
          className={`navigation__button ${
            location.pathname === "/items" && "navigation__button_active"
          }`}
        >
          item list
        </button>
      </nav>
    </>
  );
}

export default Navigation;
