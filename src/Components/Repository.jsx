import React from "react";

const Repository = ({ repository }) => {
  return (
    <>
      <div className="repositories_wrapper">
        <div className="repositories">
          <div className="repositories_search_bar_wrapper">
            <div className="repositories_search_bar"></div>
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
