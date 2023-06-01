import React from "react";
import "../styles/Navbar.css";
import githublogo from "../Asset/geethub.png";
const Navbar = () => {
  return (
    <>
      <div className="Nav_wrapper">
        <div className="logo">
          <img className="github_logo" src={githublogo} alt="ReactImage" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
