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
            const style = {
              color: items.languages.nodes[0]?.color,
            };
            const options = {
              year: "numeric",
              month: "short",
              day: "numeric",
            };
            const event = new Date(items.updatedAt);
            const newEvent = event.toLocaleDateString(undefined, options);
            console.log(newEvent);

            return (
              <div className="repository_wrapper " key={items.id}>
                <div className="repository">
                  <div className="repo_left">
                    <div className="repo_name">
                      <span className="repo_title">
                        <h3>{items.name}</h3>
                      </span>
                      <span className="repo_label tag_title">
                        {items.isPrivate == false ? (
                          <span>public</span>
                        ) : (
                          <span>private</span>
                        )}
                      </span>
                    </div>
                    <div className="repo_tag tag">
                      <span
                        className="repo_tag_color tag_color"
                        style={{ backgroundColor: style?.color }}
                      ></span>
                      <span className="repo_tag_title tag_title">
                        {items.languages.nodes[0]?.name}
                      </span>
                      <span className="repo_update tag_title">
                        {" "}
                        updated on {newEvent}
                      </span>
                    </div>
                  </div>
                  <div className="repo_right"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Repository;
