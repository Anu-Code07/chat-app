import React from "react";
import ProfilePic from "../assets/images/profilepic.jpg";
const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" name="search" id="" placeholder="find a user.." />
      </div>
      <div className="userChat">
        <img src={ProfilePic} alt="" />
        <div className="userChatInfo">
          <span>Name</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
