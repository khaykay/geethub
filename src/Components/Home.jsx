import React from "react";
import Navbar from "./Navbar";
import "../styles/Home.css";
import Main from "./Main";
import Profile from "./Profile";

const Home = () => {
  return (
    <>
      <div className="home_wrapper">
        <Navbar />
        <Main />
        <Profile />
      </div>
    </>
  );
};

export default Home;
