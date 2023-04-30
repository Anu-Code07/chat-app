import React from "react";
import ProfilePic from "../assets/images/profilepic.jpg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="user">
        <p>LOGO</p>

        <div className="profile-bar">
          <img src={ProfilePic} alt="" />
          <span>ANURAG</span>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
