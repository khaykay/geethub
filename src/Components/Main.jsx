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
              <div className="pinned_wrapper">
                <div className="pinned_title_bar">
                  <div className="pinned_title">
                    <h2>Pinned</h2>
                  </div>
                </div>
                <div className="pinned">
                  {pinnedItems.map((items) => {
                    const style = {
                      color: items.languages.edges[0].node.color,
                    };
                    return (
                      <div className="pinned_items_wrapper" key={items.id}>
                        <div className="pinned_items">
                          <div className="pinned_items_title">
                            <i class="material-symbols-outlined">
                              collections_bookmark
                            </i>
                            <a href={items.url}>{items.name}</a>
                          </div>
                          <div className="pinned_items_tag">
                            <span
                              className="pinned_items_tag_color"
                              style={{ backgroundColor: style.color }}
                            ></span>
                            <span className="pinned_items_tag_title">
                              {items.languages.edges[0].node.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="contribution_wrapper">
                <div className="contribution">
                  <div className="contribution_title_bar"></div>
                  <div className="contribution_table">
                    <img
                      src="https://ghchart.rshah.org/khayhay"
                      alt="Name Your Github chart"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
