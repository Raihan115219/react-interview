import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function MainPage() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

export default MainPage;
