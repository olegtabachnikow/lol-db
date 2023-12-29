import React from "react";
import "./MainPage.css";
import leagueLogo from "../../images/league-of-legends-logo.png";
import PropTypes from "prop-types";

function MainPage({ children }) {
  
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="main-page">
      <div className="main-page__logo-box">
        <img className="main-page__logo" src={leagueLogo} alt="lol logo" />
      </div>
      {children}
    </div>
  );
}

MainPage.propTypes = {
  children: PropTypes.object,
};

export default MainPage;
