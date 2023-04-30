import React from "react";
import ProfilePic from "../assets/images/profilepic.jpg";
const Chatlist = () => {
  return (
    <div className="chat_list">
      <div className="userChat">
        <img src={ProfilePic} alt="" />
        <div className="userChatInfo">
          <span>Name</span>
          <p>Hello !</p>
        </div>
      </div>
    </div>
  );
};

export default Chatlist;
