import React from "react";
import "../styles/Overview.css";

const Overview = ({ pinnedItems }) => {
  return (
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
              color: items.languages.edges[0]?.node.color,
            };
            return (
              <div className="pinned_items_wrapper" key={items.id}>
                <div className="pinned_items">
                  <div className="pinned_items_title">
                    <i class="material-symbols-outlined">
                      collections_bookmark
                    </i>
                    <a href={items.url}>{items.name}</a>
                    <span className="repo_label tag_title">
                      {items.isPrivate == false ? (
                        <span>Public</span>
                      ) : (
                        <span>Private</span>
                      )}
                    </span>
                  </div>
                  <div className="pinned_items_tag tag">
                    <span
                      className="pinned_items_tag_color tag_color"
                      style={{ backgroundColor: style.color }}
                    ></span>
                    <span className="pinned_items_tag_title tag_title">
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
          <div className="contribution_title_bar">
            <h2 className="contribution_title">Lorem, ipsum dolor.</h2>
          </div>
          <div className="contribution_table_wrapper">
            <div className="contribution_table">
              <img
                src="https://ghchart.rshah.org/khaykay"
                alt="Name Your Github chart"
              ></img>
              <div className="contribution_key_wrapper">
                <div className="contribution_key">
                  <div className="float_left">
                    <a
                      href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn how we count contributions
                    </a>
                  </div>
                  <div className="float_right"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contribution_activity"></div>
    </div>
  );
};

export default Overview;
