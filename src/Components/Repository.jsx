import React from "react";

const Repository = ({ repository }) => {
  return (
    <>
      <div className="repositories_wrapper">
        <div className="repositories">
          {repository.map((items) => {
            return <div className="">{items.name}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Repository;
