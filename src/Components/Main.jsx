import React from "react";
import "../styles/Main.css";
import Profile from "./Profile";
import Bar from "./Bar";

const Main = ({ data }) => {
  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);
  console.log(pinnedItems);
  return (
    <>
      <div className="main_wrapper">
        <Bar />
        <div className="layout_wrapper">
          <div className="layout">
            <Profile data={data} />
            <div className="overview">
              <div className="pinned">
                {pinnedItems.map((items) => {
                  const style = {
                    color: items.languages.edges[0].node.color,
                  };
                  return (
                    <div className="pinned_items_wrapper" key={items.id}>
                      <div className="pinned_items">
                        <i class="material-symbols-outlined">
                          collections_bookmark
                        </i>
                        <a href={items.url}>{items.name}</a>
                        <span classname="" style={{ color: style.color }}>
                          {items.languages.edges[0].node.color}
                        </span>
                        <span>{items.languages.edges[0].node.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
