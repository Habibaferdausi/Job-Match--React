import { useLoaderData } from "react-router-dom";
import JobCategory from "./JobCategory";
import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";
import { data } from "autoprefixer";

const Home = () => {
  const jobs = useLoaderData();

  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(4);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/jobData.json");
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const handleShowAll = () => {
    setShowAll(data.length);
  };

  return (
    <div className="">
      <div className="lg:flex  mb-10 bg-purple-100 lg:px-20">
        <div className="lg:w-1/2 pt-10 pb-2 ps-5">
          <h1 className="text-gray-700 text-2xl font-bold mt-12  lg:text-6xl lg:font-bold ">
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
          <img src="https://i.ibb.co/WnTvgH0/P3OLG.png" alt=""></img>
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-center text-xl lg:text-4xl font-bold text-gray-900 mt-11 mb-3">
          Job Category List
        </h1>
        <p className=" text-gray-500 text-center mb-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid gap-5 mb-8 mx-5 lg:mx-20 lg:grid-cols-4 grid-cols-1">
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
        <div>
          <div className=" grid gap-5 mb-8 mx-5 lg:mx-20 lg:grid-cols-2 grid-cols-1">
            {data.slice(0, showAll).map((jobCard) => (
              <JobsCard key={jobCard.id} jobCard={jobCard} rd></JobsCard>
            ))}
          </div>

          <div className="flex justify-center text-center mx-auto">
            {showAll < data.length && (
              <button className="btn-new " onClick={handleShowAll}>
                Show All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
