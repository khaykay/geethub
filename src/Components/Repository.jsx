import React from "react";
import "../styles/Repository.css";
const Repository = ({ repository }) => {
  return (
    <>
      <div className="repositories_wrapper">
        <div className="repositories">
          <div className="repositories_search_bar_wrapper">
            <div className="repositories_search_bar">
              <form className="repo_form">
                <input
                  type="text"
                  className="repo_form_input"
                  placeholder="Find a repository..."
                />
              </form>
            </div>
          </div>

          {repository.map((items) => {
            return (
              <div className="repository_wrapper">
                <div className="repository">{items.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Repository;
