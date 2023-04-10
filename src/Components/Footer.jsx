import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-10 pt-10 bg-black hidden">
      <div className="grid gap-5 mb-2 mx-20 lg:grid-cols-5 sm:grid-cols-1 py-10 text-gray-300">
        <div className="me-11">
          <h1 className="text-2xl font-bold mb-2 ">Job Match</h1>
          <p className="pt-2 text-gray-400">
            One Step Closer To Your Dream Job. Find your best one.
          </p>
          <div className="flex"></div>
        </div>

        <div className="ms-7">
          <h1 className="text-lg font-bold pb-3">Company</h1>
          <ul className="text-gray-400">
            <li>About us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold pb-3">Product</h1>
          <ul className="text-gray-400">
            <li>Prototype</li>
            <li>Plans & Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-bold pb-3"> Support</h1>
          <ul className="text-gray-400">
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Become a Partner</li>
            <li>Developers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold pb-3">Contact</h1>
          <ul className="text-gray-400">
            <li>524 Broadway , NYC</li>
            <li>+1 777-978-5570</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-400 border-t  border-gray-500 pb-5 mx-20"></div>
      <div>
        <div className="flex justify-between mx-20 pb-20">
          <small className="text-gray-400">
            @2023 JobMatch. All Rights Reserved
          </small>
          <small className="text-gray-400">
            Powered by{" "}
            <span className="font-semibold">Habiba Ferdausi Ritu</span>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
