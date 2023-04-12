import React from "react";
import Navigation from "./Components/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import "./index.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
     
    </div>
  );
};

export default App;
