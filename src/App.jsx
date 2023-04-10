import React from "react";
import Navigation from "./Components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import "./index.css";

const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
