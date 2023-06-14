import React, { useState } from "react";
import "../styles/Main.css";
import Profile from "./Profile";
import Bar from "./Bar";
import Overview from "./Overview";
import Repository from "./Repository";

const Main = ({ data }) => {
  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);
  const repository = user.repositories.nodes;
  // console.log(pinnedItems);
  console.log(repository);
  // console.log(user);
  const [activeState, setActiveState] = useState("overview");

  return (
    <>
      <div className="main_wrapper">
        <Bar setActiveState={setActiveState} />
        <div className="layout_wrapper">
          <div className="layout">
            <Profile data={data} />
            {activeState === "overview" && (
              <Overview pinnedItems={pinnedItems} />
            )}
            {activeState === "repository" && (
              <Repository repository={repository} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
