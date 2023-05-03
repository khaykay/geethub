import React from "react";
import "../styles/Navbar.css";
import githublogo from "../Asset/geethub.png";
const Navbar = () => {
  return (
    <>
      <div className="Nav_container">
        <div className="logo">
          <img src={githublogo} alt="ReactImage" />
        </div>
        <div className="overview_logo logo">
          <i class="material-symbols-outlined">import_contacts</i>
        </div>
        <div className="repo_logo logo">
          Repositories
          <i class="material-symbols-outlined">collections_bookmark</i>
        </div>
        <div className="project_logo logo">
          Projects
          <i class="material-symbols-outlined">dashboard</i>
        </div>
        <div className="packages_logo logo">
          Packages
          <i class="material-symbols-outlined">inventory_2</i>
        </div>
        <div className="stars_logo logo">
          stars
          <i class="material-symbols-rounded">star</i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
