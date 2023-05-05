import React from "react";
import "../styles/Profile.css";

const Profile = ({ data }) => {
  return (
    <>
      <div className="profile_wrapper">
        <div className="avi">
          <img src={data.user.avatarUrl} className="avi_img" />
        </div>
        <div className="name">
          <span className="full_name">{data.user.name}</span>
          <span className="user_name">@{data.user.login}</span>
        </div>
        <div className="btn">Edit Profile</div>
        <div className="follow">
          <i class="material-symbols-outlined">group</i>
          <span className="follower">
            {data.user.followers.totalCount} follower
          </span>
          <span className="following">
            {data.user.following.totalCount} following
          </span>
        </div>
      </div>
    </>
  );
};

export default Profile;
