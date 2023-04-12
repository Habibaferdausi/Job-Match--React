import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getAppliedJob } from "../utilities/dataBase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";

const AppliedJob = () => {
  const [job, setJob] = useState([]);
  const [filter, setFilter] = useState([]);
  const jobData = useLoaderData();
  useEffect(() => {
    const savedJob = getAppliedJob();
    let newArr = [];
    for (const id in savedJob) {
      const foundJob = jobData.find((job) => job.id === parseInt(id));
      console.log(foundJob);
      if (foundJob) {
        newArr.push(foundJob);
      } else {
        return;
      }
    }
    setJob(newArr);
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredJobs = job.filter((job) => {
    if (filter === "remote") {
      return job.remote_or_onsite === "Remote";
    } else if (filter === "onsite") {
      return job.remote_or_onsite === "Onsite";
    } else {
      return true;
    }
  });

  // console.log(job);

  return (
    <div className=" ">
      <div className="relative">
        <div className="flex items-center justify-between  h-20 lg:h-40 bg-purple-100">
          <img
            src="https://i.ibb.co/4V7V2m4/Vector.png"
            alt="Image 1"
            className="w-1/6 h-50 object-cover"
          />
          <img
            src="https://i.ibb.co/9vx46mz/Vector-1.png"
            alt="Image 2"
            className="w-1/6 mb-40 h-50 object-cover"
          />
        </div>
        <div className=" absolute inset-0 ">
          <div className="text-black">
            <h1 className="text-4xl font-bold text-center mt-8">
              Applied Jobs
            </h1>
          </div>
        </div>
      </div>

      <h1 className="text-center mb-5 mt-8  font-semibold">
        TOTAL JOB : {filteredJobs.length}
      </h1>
      <div className="flex  justify-end me-12 mb-8 mt-8">
        <select
          className="border border-gray-400 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All Jobs</option>
          <option value="remote">Remote Jobs</option>
          <option value="onsite">Onsite Jobs</option>
        </select>
      </div>

      {filteredJobs.map((job) => (
        <div key={job.id} job={job}>
          <div className="border border-purple-300 mb-5 p-6 lg:flex justify-between items-center mx-10">
            <div className="lg:flex justify-between items-center">
              <img
                src={job.company_logo}
                alt=""
                className="rounded h-20 w-20 bg-purple-200"
              />
              <div className="ms-4">
                <p className="font-semibold text-xl">{job.job_title}</p>
                <p>
                  <span className="text-gray-500">{job.company_name}</span>
                </p>
                <div className="lg:flex text-sm pt-2 ">
                  <button className="border border-purple-500 p-1  font-semibold rounded me-4 text-purple-500">
                    {job.remote_or_onsite}
                  </button>
                  <button className=" border border-purple-500 font-semibold rounded   p-1 text-purple-500">
                    {job.fulltime_or_parttime}
                  </button>
                </div>
                <div className="flex pt-3 font-semibold ">
                  <p className="text-sm text-gray-400  ">
                    <FontAwesomeIcon
                      className="lg:me-2 "
                      icon={faLocationDot}
                    />
                    {job.location}
                  </p>
                  <p className="text-sm text-gray-400 ms-3 ">
                    {" "}
                    <FontAwesomeIcon
                      className="me-1"
                      icon={faCircleDollarToSlot}
                    />
                    Salary: {job.salary}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Link to={`../job/${job.id}`} className="btn-new mt-5">
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedJob;
