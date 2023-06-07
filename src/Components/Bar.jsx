import React from "react";
import "../styles/Bar.css";

const Bar = ({ setActiveState }) => {
  return (
    <div className="bar_wrapper">
      <div className=""></div>
      <div className="bar">
        <div className="nav_icon">
          <div className="overview_logo logo">
            <i class="material-symbols-outlined">import_contacts</i>
            <span
              className="logo_title"
              onClick={() => {
                setActiveState("overview");
              }}
            >
              Overview
            </span>
          </div>
          <div className="repo_logo logo">
            <i class="material-symbols-outlined">collections_bookmark</i>
            <span
              className="logo_title"
              onClick={() => {
                setActiveState("repository");
              }}
            >
              Repositories
            </span>
          </div>
          <div className="project_logo logo">
            <i class="material-symbols-outlined">dashboard</i>
            <span className="logo_title">Projects</span>
          </div>
          <div className="packages_logo logo">
            <i class="material-symbols-outlined">inventory_2</i>
            <span className="logo_title">Packages</span>
          </div>
          <div className="stars_logo logo">
            <i class="material-symbols-rounded">star</i>
            <span className="logo_title">Stars</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bar;
