import React from "react";
import Sidebar from "../Components/Sidebar";
import Chats from "../Components/Chats";
import "../styles/home.scss";
const Home = () => {
  return (
    <div className="home_container">
      <div className="home_sidebar">
        <Sidebar />
        <Chats />
      </div>
    </div>
  );
};

export default Home;
