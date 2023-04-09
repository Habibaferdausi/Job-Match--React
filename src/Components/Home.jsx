import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCategory from "./JobCategory";

const Home = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div className="my-container  pb-10">
      <div className="lg:flex  bg-gray-200 pb-40">
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
      <div className="mt-30">
        <h1 className="text-center text-xl lg:text-4xl font-bold text-gray-900 mb-3">
          Job Category List
        </h1>
        <p className=" text-gray-500 text-center mb-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {jobs.map((job) => (
          <JobCategory key={job.id} job={job}></JobCategory>
        ))}
      </div>
    </div>
  );
};

export default Home;
