import React from "react";
import "../styles/Main.css";

const Main = ({ data }) => {
  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);
  console.log(pinnedItems);
  return (
    <>
      <div className="main_wrapper">
        <div className="pinned">
          {pinnedItems.map((items) => {
            return (
              <div className="pinned_items" key={items.id}>
                <i class="material-symbols-outlined">collections_bookmark</i>
                <a href={items.url}>{items.name}</a>
                <span>{items.languages.edges[0].node.color}</span>
                <span>{items.languages.edges[0].node.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
