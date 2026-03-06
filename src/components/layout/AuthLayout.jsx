import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from "../hero/HeroSection";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <HeroSection />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
