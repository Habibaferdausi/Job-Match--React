import { useLoaderData } from "react-router-dom";
import JobCategory from "./JobCategory";
import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";
import { data } from "autoprefixer";

const Home = () => {
  const jobs = useLoaderData();
  console.log(jobs);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("jobdata.json");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className="my-container mx-auto  pb-10">
      <div className="lg:flex  pb-40">
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
          <img src="../assets//All-Images/P3OLG.png" alt=""></img>
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
      <div className="grid gap-5 mb-8 mx-20 lg:grid-cols-4 sm:grid-cols-2">
        {jobs.map((job) => (
          <JobCategory key={job.id} job={job}></JobCategory>
        ))}
      </div>

      <div className="mt-10 lg:mt-20 ">
        <div>
          <h1 className="text-center text-xl lg:text-4xl font-bold text-gray-900 mb-3 mt-3 p-1 lg:mt-6 lg:pt-7">
            Featured Jobs
          </h1>
          <p className=" text-gray-500 text-center mb-10">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className=" grid gap-5 mb-8 mx-20 lg:grid-cols-2 sm:grid-cols-1">
          {data.map((item) => (
            <JobsCard key={item.id} item={item}></JobsCard>
          ))}
        </div>
        <div className="flex justify-center text-center mx-auto">
          <button className="btn-new ">Show All</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
