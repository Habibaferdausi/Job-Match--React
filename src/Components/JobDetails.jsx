import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleJob from "./AppliedJob";
import { addToDb } from "../utilities/dataBase";

const JobDetails = () => {
  const { id } = useParams();
  const [jobDetail, setJob] = useState([]);

  // const allJobs = useLoaderData();

  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const job = jobDetail.filter((jobDetail) => jobDetail.id === parseInt(id));
  //apply button
  const handleAddToApply = (id) => {
    console.log(id);
    addToDb(id);
  };

  return (
    <div>
      <div className="relative">
        <div className="flex items-center justify-between h-40 bg-purple-100">
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
            <h1 className="text-4xl font-bold text-center mt-8">Job Details</h1>
          </div>
        </div>
      </div>

      {job.map((job) => (
        <div
          className="grid grid-cols-1 lg:grid-cols-3 mx-20 gap-5 my-20 "
          key={job.id}
          job={job}
          handleAddToApply={handleAddToApply}
        >
          <div className="lg:col-span-2 ">
            <h1 className="py-1 text-gray-700">
              <span className="  text-black font-semibold">
                Job Description :{" "}
              </span>
              {job.job_description}
            </h1>
            <h1 className="py-1 mt-7  text-gray-700">
              <span className="  text-black font-semibold">
                Job Responsibility :{" "}
              </span>
              {job.job_responsibility}
            </h1>

            <h1 className="py-1 mt-7  text-gray-700">
              <span className=" text-black  font-semibold">
                Educational Requirements :{" "}
              </span>
              {job.educational_requirements}
            </h1>
            <h1 className="py-1 mt-7  text-gray-700">
              <span className=" font-semibold text-black">Experiences: </span>
              {job.experiences}
            </h1>
          </div>
          <div className="mx-4">
            <div className="bg-purple-200 rounded ">
              <div className="p-6">
                <h1 className="text-lg border-b-2 border-purple-400 mb-3 pb-5 font-bold">
                  Job Details
                </h1>
                <h1 className="   mb-3  ">Salary :{job.salary}</h1>
                <h1 className="  mb-3 ">Job Title :{job.job_title}</h1>
                <h1 className="text-lg border-b-2 border-purple-400 mb-3 pb-5 font-bold">
                  Contact Information
                </h1>
                <h1 className="   mb-3  ">
                  Phone:{job.contact_information.phone}
                </h1>
                <h1 className="   mb-3  ">
                  Email:{job.contact_information.email}
                </h1>
                <h1 className="   mb-3  ">Address:{job.location}</h1>
              </div>
            </div>
            <button
              onClick={() => handleAddToApply(job.id)}
              type="button"
              className="btn-new text-center w-full mt-10"
            >
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobDetails;
