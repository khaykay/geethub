import React from "react";
import "../styles/Profile.css";

const Profile = () => {
  return (
    <>
      <div className="profile_wrapper">
        <div className="avi"></div>
        <div className="name">
          <span className="full_name">full name</span>
          <span className="user_name">@user name</span>
        </div>
        <div className="btn">Edit Profile</div>
        <div className="follow">
          <i class="material-symbols-outlined">group</i>
          <span className="follower">follower</span>
          <span className="following">following</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
