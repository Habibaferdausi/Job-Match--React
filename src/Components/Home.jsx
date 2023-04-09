import React from "react";

const Home = () => {
  return (
    <div className="my-container  lg:flex">
      <div className="w-1/3 mt-5 ms-2">
        <h1 className="text-gray-700 text-xl lg:text-5xl lg:font-bold ">
          Discover Your Ideal Career with
          <span className="text-purple-700"> Job Match</span>{" "}
        </h1>
        <p className="text-gray-400 mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn-new mt-5">Get Started </button>
      </div>
      <div className="">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Home;
