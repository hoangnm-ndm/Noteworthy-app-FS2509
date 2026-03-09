import React from "react";
import SideBar from "../components/layout/main/SideBar";
import MainContent from "../components/notes/MainContent";

const HomePage = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default HomePage;
