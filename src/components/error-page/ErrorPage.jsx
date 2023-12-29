import React from "react";
import "./ErrorPage.css";
import errorChar from "../../images/error-man.png";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  React.useEffect(() => {});
  return (
    <div className="error-page">
      <div className="error-page__container">
        <img
          className="error-page__image"
          src={errorChar}
          alt="error page character"
        />
        <span className="error-page__text">404</span>
        <button className="error-page__button" onClick={() => navigate("/")}>
          return to main
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
