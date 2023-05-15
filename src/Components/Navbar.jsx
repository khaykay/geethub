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
        <div className="nav_icon">
          <div className="overview_logo logo">
            <i class="material-symbols-outlined">import_contacts</i>
          </div>
          <div className="repo_logo logo">
            <i class="material-symbols-outlined">collections_bookmark</i>
          </div>
          <div className="project_logo logo">
            <i class="material-symbols-outlined">dashboard</i>
          </div>
          <div className="packages_logo logo">
            <i class="material-symbols-outlined">inventory_2</i>
          </div>
          <div className="stars_logo logo">
            <i class="material-symbols-rounded">star</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
